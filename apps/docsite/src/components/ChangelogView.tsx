// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Suspense} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import * as stylex from '@stylexjs/stylex';
import {Markdown} from '@astryxdesign/core/Markdown';
import {Text, Heading} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Layout';
import {Section} from '@astryxdesign/core/Section';
import {TabList, Tab} from '@astryxdesign/core/TabList';
import {Carousel} from '@astryxdesign/core/Carousel';
import {typeScaleVars} from '@astryxdesign/core/theme/tokens.stylex';
import {layout} from '../layout.stylex';
import {
  linkifyPRs,
  linkifyContributors,
  linkifyComponents,
  stripTitle,
  fillEmptyReleases,
} from './changelogLinkify';

interface ChangelogEntry {
  pkg: string;
  content: string;
}

interface ChangelogViewProps {
  changelogs: ChangelogEntry[];
  componentNames: string[];
}

// The package most people land on this page to read about; picked over
// "whichever package happens to sort first" (@astryxdesign/cli).
const DEFAULT_PACKAGE = '@astryxdesign/core';

const styles = stylex.create({
  section: {
    marginInline: 'auto',
    // Match the docs article body treatment (16px / 1.75) from DocPageLayout.
    // The release-notes body renders via Markdown, whose root reads these
    // tokens; re-assigning them here scopes the larger/airier body to the
    // changelog article only. The title (display-1), subtitle (large), and
    // tab labels use different tokens, so they're unaffected.
    [typeScaleVars['--text-body-size']]: '1rem', // 16px
    [typeScaleVars['--text-body-leading']]: '1.75', // 28px line box
  },
});

function ChangelogViewInner({changelogs, componentNames}: ChangelogViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const fallbackPackage =
    changelogs.find(c => c.pkg === DEFAULT_PACKAGE)?.pkg ??
    changelogs[0]?.pkg ??
    '';
  const requestedPackage = searchParams.get('package');
  // Clamp to a package that actually has a changelog so a stale or
  // hand-edited `?package=` never lands on a blank panel.
  const activeTab =
    requestedPackage != null && changelogs.some(c => c.pkg === requestedPackage)
      ? requestedPackage
      : fallbackPackage;
  const setActiveTab = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === fallbackPackage) {
      params.delete('package');
    } else {
      params.set('package', value);
    }
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ''}`, {scroll: false});
  };
  const active = changelogs.find(c => c.pkg === activeTab);

  return (
    <Section
      maxWidth={layout.proseMaxWidth}
      padding={6}
      xstyle={styles.section}>
      <VStack gap={8}>
        <VStack gap={4}>
          <Heading level={1} type="display-1">
            What&apos;s New
          </Heading>
          <Text type="large" weight="normal" color="secondary">
            Release notes and changelog for all packages.
          </Text>
        </VStack>

        {changelogs.length > 0 ? (
          <>
            <TabList value={activeTab} onChange={setActiveTab} hasDivider>
              <Carousel gap={0.5} hasSnap={false}>
                {changelogs.map(c => (
                  <Tab key={c.pkg} value={c.pkg} label={c.pkg} />
                ))}
              </Carousel>
            </TabList>

            {active != null && (
              <Markdown headingLevelStart={2}>
                {linkifyComponents(
                  linkifyContributors(
                    linkifyPRs(fillEmptyReleases(stripTitle(active.content))),
                  ),
                  componentNames,
                )}
              </Markdown>
            )}
          </>
        ) : (
          <Text type="body" color="secondary">
            Changelogs could not be loaded.
          </Text>
        )}
      </VStack>
    </Section>
  );
}

export function ChangelogView(props: ChangelogViewProps) {
  return (
    <Suspense>
      <ChangelogViewInner {...props} />
    </Suspense>
  );
}
