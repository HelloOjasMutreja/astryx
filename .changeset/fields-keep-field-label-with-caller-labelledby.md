---
'@astryxdesign/core': patch
---

[fix] TextArea, Typeahead and Tokenizer: a caller's `aria-labelledby` no longer replaces the field's own label. Before, it was the only name the control had, so `label="Notes" aria-labelledby="billing-heading"` named the textarea "Billing". Now the caller's ids follow the field's own label ("Notes Billing"), and a Typeahead inside an InputGroup is named by the group, its label, then the caller's ids, as TextInput, NumberInput, Selector and MultiSelector already are. Fields without a caller `aria-labelledby` are unchanged. No API changes.

@HelloOjasMutreja
