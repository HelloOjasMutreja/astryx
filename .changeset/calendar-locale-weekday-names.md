---
'@astryxdesign/core': patch
---

[fix] `Calendar`'s weekday header names now follow the ambient `InternationalizationProvider` locale. They previously hardcoded English abbreviations (`Su`, `Mo`, `Tu`, ...) regardless of the provider's `locale`, so a tree wrapped in a non-English locale still rendered English weekday headers. English keeps its existing compact two-letter abbreviations; every other locale now uses its own short weekday form via `Intl.DateTimeFormat`.

@HelloOjasMutreja
