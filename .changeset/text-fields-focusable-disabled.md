---
'@astryxdesign/core': patch
---

[fix] TextInput, TextArea: a disabled field now keeps its place in the tab order. It exposes `aria-disabled="true"` and is read-only instead of carrying the native `disabled` attribute, as the field already did when a `disabledMessage` was set. It is still dimmed, cannot be edited, and is left out of form submission. Like a natively disabled field, it runs no caller event handler other than focus and blur, and Enter in a disabled TextInput does not submit its form. Under keyboard focus it shows the field's focus ring, dimmed with the rest of the field.

Part of #7814.

@HelloOjasMutreja
