---
'@astryxdesign/core': patch
---

[fix] `SelectableCard`, `Thumbnail`, and `ClickableCard`'s hover overlay paints again — it silently stopped rendering at 0.4.6.

`#5247` added a zero-specificity `:where(:not(:disabled,[aria-disabled="true"]))` guard to every self-`:hover` selector for WCAG 1.4.1. On these three components the hover key also targets `::after`, and combining a hover pseudo-class with a pseudo-element hits a `@stylexjs/babel-plugin@0.19.0` tokenizer bug: `getCompoundPseudoPriority()` can't match the nested parens in `:where(:not(...))`, bails to a wrong priority default, and the rule's specificity boost silently dropped from 7 `:not(#\#)`s to 3. The resting `background-color: transparent` rule (still at 7) then out-specified the hover rule in the same layer, so the overlay never painted — verified by diffing the generated `astryx.css` byte-for-byte against 0.4.5.

The guard was redundant on these three anyway: each already applies the whole `hoverOnPointer` class conditionally (`!isDisabled && styles.hoverOnPointer`, or `isInteractive && ...` for Thumbnail, where `isInteractive` already excludes `isDisabled`), so a disabled/non-interactive card never carries the class that would need guarding. Reverted the three keys to bare `:hover::after`, restoring the pre-regression 7-boost CSS output exactly.

`@astryx/no-hover-on-disabled` now knows to leave `:hover` + pseudo-element combinations alone — guarding them would just reintroduce this exact break until the StyleX tokenizer is fixed upstream. This is a real, documented coverage gap, not a free pass: a new `:hover::after`/`:hover::before` key that doesn't already exclude the disabled case some other way (as these three do, in JS) needs manual verification, since the lint rule can no longer catch it in this shape.

Fixes #5442.

@HelloOjasMutreja
