---
'@astryxdesign/core': patch
---

[fix] CheckboxInput/Switch: description is now part of the clickable label
@HelloOjasMutreja

`FieldLabel`'s `description` rendered as a sibling `<span>` outside the `<label>` element, so clicking it did nothing — only the label text itself toggled the control. `description` now renders inside the `<label>`, wrapping onto its own line via `flexWrap`/`flexBasis`, so clicking anywhere in the description toggles the checkbox or switch the same way clicking the label text already did. `Field`'s vertical-label layout picks up the same fix since it shares `FieldLabel`; the horizontal-label layout is unaffected since it renders `description` outside the label there already.
