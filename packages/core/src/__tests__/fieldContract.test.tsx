// Copyright (c) Meta Platforms, Inc. and affiliates.

import {describe, it, expect} from 'vitest';

import {docs as FieldDocs} from '../Field/Field.doc.mjs';

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

describe('Field Component API Contract Drift (#4163)', () => {
  it('documents Field labelID and isGroupLabel props', () => {
    const props = getProps(FieldDocs).map(p => p.name);
    expect(props).toContain('labelID');
    expect(props).toContain('isGroupLabel');
  });
});
