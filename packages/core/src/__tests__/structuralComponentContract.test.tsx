// Copyright (c) Meta Platforms, Inc. and affiliates.

import {describe, it, expect} from 'vitest';

import {docs as CodeBlockDocs} from '../CodeBlock/CodeBlock.doc.mjs';
import {docs as StackDocs} from '../Stack/Stack.doc.mjs';
import {docs as ToolbarDocs} from '../Toolbar/Toolbar.doc.mjs';

function getProps(docs: Record<string, unknown>): {name: string}[] {
  return (
    (docs.props as {name: string}[]) ||
    (
      docs.components as {
        props: {name: string}[];
      }[]
    )?.[0]?.props ||
    []
  );
}

describe('Structural Component API Contract Drift (#4163)', () => {
  it('documents CodeBlock highlightMode prop', () => {
    const props = getProps(CodeBlockDocs).map(p => p.name);
    expect(props).toContain('highlightMode');
  });

  it('documents Toolbar dividers prop', () => {
    const props = getProps(ToolbarDocs).map(p => p.name);
    expect(props).toContain('dividers');
  });

  it('documents Stack direction and base props', () => {
    const props = getProps(StackDocs).map(p => p.name);
    expect(props).toContain('direction');
    expect(props).toContain('gap');
    expect(props).toContain('padding');
    expect(props).toContain('width');
    expect(props).toContain('height');
  });
});
