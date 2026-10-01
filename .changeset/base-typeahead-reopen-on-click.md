---
'@astryxdesign/core': patch
---

[fix] `Typeahead`, `Selector`, `MultiSelector`, `Tokenizer`, `PowerSearch`, `CommandPalette`, `DateTimeInput`: clicking the search/combobox input after the dropdown closed without a blur now reopens it.

`BaseTypeahead` only ever opened its dropdown in response to a real `focus` event. Any flow that closes the dropdown while leaving the input focused — selecting a result (which re-focuses the input internally after clearing it), pressing Escape, or a composing component (`PowerSearch`'s token add/remove, e.g.) imperatively re-focusing the same input once it's done — dispatches no new `focus` event, since `focus()` is a no-op on an element that's already the active element. The input looked focused and clickable, but clicking it did nothing until the user clicked elsewhere first and back.

`BaseTypeahead` now also opens on click, specifically when the click did not itself just cause the input to gain focus (that case is already handled by the existing focus path, and running both would double-fire a bootstrap fetch on every first click).

Fixes #6845.

@HelloOjasMutreja
