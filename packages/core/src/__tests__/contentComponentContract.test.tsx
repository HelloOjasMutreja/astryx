// Copyright (c) Meta Platforms, Inc. and affiliates.

import {describe, it, expect} from 'vitest';

import {docs as CitationDocs} from '../Citation/Citation.doc.mjs';
import {docs as MarkdownDocs} from '../Markdown/Markdown.doc.mjs';

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

describe('Content Component API Contract Drift (#4163)', () => {
  it('documents Citation title, url, icon source properties', () => {
    const props = getProps(CitationDocs).map(p => p.name);
    expect(props).toContain('title');
    expect(props).toContain('url');
    expect(props).toContain('icon');
  });

  it('documents Markdown components prop', () => {
    const props = getProps(MarkdownDocs).map(p => p.name);
    expect(props).toContain('components');
  });
});
