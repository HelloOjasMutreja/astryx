// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file no-hover-on-disabled.js
 * @description A `:hover` condition must be written so it cannot match a
 * disabled element.
 *
 * `:hover` keeps matching a disabled control. Browsers suppress its EVENTS,
 * not its styling, so a hover treatment declared on the enabled element is
 * still painted under the pointer — the control says "press me" while
 * refusing to be pressed.
 *
 * Nothing in StyleX takes it away for you. A `disabled` style that sets
 * `backgroundImage: 'none'` overrides the DEFAULT condition only: the
 * variant's `:hover` class survives the merge and wins the moment the pointer
 * arrives. Button shipped that bug in every variant, and it survived because
 * both halves read as correct in review.
 *
 * So the guard goes on the selector, where it cannot be missed:
 *
 *   BAD   backgroundColor: {default: 'transparent', ':hover': OVERLAY}
 *   GOOD  backgroundColor: {
 *           default: 'transparent',
 *           ':hover:where(:not(:disabled,[aria-disabled="true"]))': OVERLAY,
 *         }
 *
 * `:where()` contributes no specificity, so the guarded selector weighs
 * exactly what `:hover` weighed and every existing override still wins the
 * way it used to.
 *
 * The rule is unconditional — it does not try to guess which components have
 * a disabled state. On an element that can never be disabled the guard is a
 * no-op, and asking the question per component is what leaves the gaps. It is
 * autofixable: `eslint --fix` rewrites the key.
 *
 * SCOPE: `:hover` on the styled element ITSELF. A key that hovers something
 * else — `:is(th:hover *)`, `stylex.when.ancestor(':hover')` — styles a
 * descendant when an ANCESTOR is hovered, which is a different question (a
 * row may legitimately highlight around a disabled control) and is left
 * alone.
 *
 * GAP, known and tracked: `:hover` combined with a pseudo-ELEMENT —
 * `:hover::after`, `:hover::before` — is left unguarded too, and is NOT
 * autofixed if already unguarded. `@stylexjs/babel-plugin@0.19.0`'s
 * getCompoundPseudoPriority() cannot match the nested parens in
 * `:where(:not(:disabled,[aria-disabled="true"]))` and bails to a wrong
 * priority default, which silently drops the rule's specificity boost and
 * can let an unrelated resting rule win instead — see
 * facebook/astryx#5442, where this broke SelectableCard/Thumbnail/
 * ClickableCard's hover overlay. Guarding a `:hover::after` key here would
 * reintroduce that regression, so the exemption stays until the upstream
 * tokenizer is fixed.
 *
 * This is a real coverage hole, not a free pass: a `:hover::after`/
 * `:hover::before` key on a component that does NOT already exclude the
 * disabled case some other way (the three components above all gate the
 * whole class in JS — `!isDisabled && styles.hoverOnPointer`) can still ship
 * a hover-while-disabled bug with nothing here to catch it. Verify that
 * gating by hand for anything new in this shape.
 */

/** Zero-specificity guard appended to a self-hover selector. */
const GUARD = ':where(:not(:disabled,[aria-disabled="true"]))';

/**
 * Is this key a `:hover` on the styled element itself?
 *
 * Anything that hovers another element — a descendant combinator, or `:hover`
 * buried inside `:is()`/`:where()`/`:has()` — is out of scope, so the test is
 * deliberately narrow: the key must OPEN with `:hover`.
 */
function isSelfHoverKey(key) {
  return typeof key === 'string' && /^:hover(?![-\w])/.test(key);
}

/** Already guarded, in any spelling a hand might use. */
function hasDisabledGuard(key) {
  return /:not\([^)]*(?::disabled|\[aria-disabled)/.test(key);
}

/**
 * Combines `:hover` with a pseudo-ELEMENT (`::after`, `::before`, ...).
 *
 * See the GAP note in the file header: guarding this shape hits a StyleX
 * tokenizer bug that silently breaks the rule it's meant to protect, so it's
 * deliberately left unguarded and unflagged until that's fixed upstream.
 */
function hasPseudoElement(key) {
  return key.includes('::');
}

/**
 * Insert the guard, keeping any pseudo-ELEMENT last.
 *
 * `:hover::after` becomes `:hover<guard>::after` — a pseudo-element has to
 * end the selector, so the guard cannot simply be appended.
 */
function guardKey(key) {
  const pseudoElement = key.indexOf('::');
  if (pseudoElement === -1) return key + GUARD;
  return key.slice(0, pseudoElement) + GUARD + key.slice(pseudoElement);
}

function keyOf(property) {
  if (!property || property.type !== 'Property') return null;
  if (property.key?.type === 'Literal') return String(property.key.value);
  if (property.key?.type === 'Identifier' && !property.computed) {
    return property.key.name;
  }
  return null;
}

function isInsideStylexCreate(node) {
  let current = node;
  while (current) {
    if (
      current.type === 'CallExpression' &&
      current.callee?.type === 'MemberExpression' &&
      current.callee.object?.name === 'stylex' &&
      current.callee.property?.name === 'create'
    ) {
      return true;
    }
    current = current.parent;
  }
  return false;
}

const rule = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description:
        'A :hover condition must be written so it cannot match a disabled element',
      category: 'Accessibility',
      recommended: true,
    },
    messages: {
      unguardedHover:
        "'{{key}}' still matches a disabled element — browsers suppress a disabled control's events, not its hover styling. " +
        "Write '{{fixed}}' instead (`:where()` adds no specificity, so overrides are unaffected).",
    },
    schema: [],
  },
  create(context) {
    return {
      Property(node) {
        if (!isInsideStylexCreate(node)) return;
        const key = keyOf(node);
        if (!isSelfHoverKey(key) || hasDisabledGuard(key)) return;
        if (hasPseudoElement(key)) return;

        const fixed = guardKey(key);
        context.report({
          node: node.key,
          messageId: 'unguardedHover',
          data: {key, fixed},
          fix(fixer) {
            // Only a string-literal key can be rewritten safely; an identifier
            // key cannot spell this selector in the first place.
            if (node.key.type !== 'Literal') return null;
            // The guard carries double quotes, so the result is single-quoted
            // unless its own content rules that out.
            const quoted = fixed.includes("'")
              ? JSON.stringify(fixed)
              : `'${fixed}'`;
            return fixer.replaceText(node.key, quoted);
          },
        });
      },
    };
  },
};

export default rule;
export {GUARD, guardKey, isSelfHoverKey, hasDisabledGuard, hasPseudoElement};
