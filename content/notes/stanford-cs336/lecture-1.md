---
title: "Lecture 1: Overview, Tokenization"
date: 2026-06-30
tags:
  - artificial-intelligence
  - llms
  - nlp
  - nlp/tokenization
---
![](https://www.youtube.com/watch?v=JuoVZkPBiKk&list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV)

> [!info] Links
> **Course Website**: https://cs336.stanford.edu/
> **GitHub Repo**: https://github.com/sidmaji/assignment1-basics

## Why This Course
> [!quote] Problem: researchers are becoming disconnected from the underlying technology.
> - 2016: Researchers implemented and trained their own models.
> - 2018: Researchers downloaded pre-trained models (eg. BERT) and fine-tuned them.
> - Today: Researchers prompt API models (eg. ChatGPT, Claude)

-> boost in productivity, but language models (**LMs**) have become very abstracted. **Fundamental research** requires **full understanding** of the technology.

### The Industrialization of LMs
Frontier models are very expensive:
- 2023: GPT-4 supposedly cost $100M to train. [article](https://www.wired.com/story/openai-ceo-sam-altman-the-age-of-giant-ai-models-is-already-over/)
- 2025: xAI builds cluster with 230K GPUs for training Grok. [article](https://x.com/elonmusk/status/1947701807389515912)

Many frontier models don't follow an open-source philosophy (which is ironic, especially for companies like \*Open\*AI).
From the GPT-4 technical report:
![[gpt4-no-details.png]]

For these reasons, frontier models are often out of reach for us. We could build small LMs (<1B parameters), but this might not be representative of LLMs.

Example: emergence of behavior with scale.
![[wei-emergence-plot.png]]

### How does this class transfer to frontier models?

Three types:
- **Mechanics**: how things actually work (eg. what a Transformer is)
- **Mindset**: understanding scaling and squeezing the most out of your hardware
- **Intuitions**: build instincts on data and modeling decisions that will maximize accuracy

## Basics
The goal for the first two weeks of the course is to understand the **basics**.
- Goal: be able to train a basic LM.
- Components:
	- tokenization
	- model architecture
	- training

### Tokenization
**Tokens** are the building blocks of LMs.

Formally, a tokenizer converts raw input text (bytes) into sequences of tokens (integers).
![[tokenized-example.png]]

Popular tokenizer: BPE (**Byte-Pair Encoding**)
- This breaks up input into frequently-occurring pairs of bytes (chunks).

Tokenization is efficient:
- It reduces context length (eg. 1000 bytes -> ~250 tokens).
- Allows for adaptive computation (eg. more common, frequent bytes can be compressed into fewer tokens like the word "and" or "the", while more interesting, less common bytes can be expanded into more tokens).

The dream is to have tokenizer-free models.
> [!cite] **Tokenizer-Free Models**
> The dream of **tokenizer-free** (or token-free) models is ==to eliminate the rigid "middleman" that translates human text into numeric IDs==. Instead of chopping words into predefined pieces, a tokenizer-free system processes language at the raw character or byte level, making AI more robust, universal, and intuitive. [[1](https://www.emergentmind.com/topics/token-free-nlp), [2](https://www.linkedin.com/posts/leadgenmanthan_how-do-large-language-models-work-the-diagram-activity-7325077101441609728-nwNx)]

### Model Architecture
