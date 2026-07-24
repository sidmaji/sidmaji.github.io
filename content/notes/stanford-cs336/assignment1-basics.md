---
title: "Assignment 1: Basics"
date: 2026-07-05
description: Siddhant Maji's version of Assignment 1 for Stanford CS336 - Language Modeling From Scratch.
---
> [!info] Links
> **GitHub**: https://github.com/sidmaji/assignment1-basics

## Byte-Pair Encoding (BPE) Tokenizer

### Problem (`unicode1`): Understanding Unicode (1 point)
1. `chr(0)` returns '\x00'
2. The printed representation is empty while the string representation is the escape sequence "'\\x00'".
3. When printed within text, the character does not appear; in the string representation it appears in the output.
### Problem (`unicode2`): Unicode Encodings (3 points)
1. UTF-8 preserves common ASCII characters, requiring 1 byte per character. UTF-16 and UTF-32 use at least 2 or 4 bytes per character, respectively, which makes it less space-efficient.
2. An example of a byte string that this function would fail to decode is `"hello こんにちは!".encode("utf-8")`. This function is incorrect because it assumes that every character in the original unicode string will have just one byte, but UTF-8 encodes characters with 1-4 bytes.
3. 
