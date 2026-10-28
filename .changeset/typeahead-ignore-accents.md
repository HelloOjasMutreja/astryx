---
'@astryxdesign/core': patch
---

[fix] Type-to-select ignores accents when matching. Pressing `d` on a closed Selector, or in an open DropdownMenu or ContextMenu, now reaches "Đào" and pressing `a` reaches "Ánh". Before, a key typed without the mark skipped every option that starts with the marked letter, which is how Vietnamese, Spanish, French and Polish lists are usually typed. Case is still ignored, letters Unicode does not decompose (đ, ł, ø) fold to their base letter, and letters that differ by a mark outside the diacritics block (the Japanese voiced kana) stay distinct. No API changes.

@HelloOjasMutreja
