---
'@astryxdesign/core': patch
---

[fix] ChatComposerInput: the trigger menu's loading row no longer mounts as a `role="status"` region already holding its text, which screen readers could skip. The loading text is announced once per search through the shared polite channel instead; the visible row and its `loadingText` are unchanged.

Fixes #7859.

@HelloOjasMutreja
