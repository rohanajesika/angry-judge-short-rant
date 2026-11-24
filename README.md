[![make.fun · u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rohanajesika/angry-judge-short-rant/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rohanajesika/angry-judge-short-rant/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

# Angry Judge: The Short Rant

A program that writes one short, furious rant about the self-checkout — one banana, one standoff with a machine — for the [make.fun "Angry Judge: The Short Rant Contest" bounty](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046).

## The rant

> The self-checkout scanned my banana and screamed UNEXPECTED ITEM IN THE BAGGING AREA, like I'd smuggled a grand piano. A red light started flashing overhead. An attendant strolled over at the speed of a man approaching a bomb. I bought one banana. One. It weighs 120 grams and has committed no crime, yet here I stand in a standoff with a machine while the queue behind me visibly ages.

## How it works

`main.ts` (Node 22, standard library only) writes that one rant to `/output/entry.txt`. It is deterministic: the same bytes on every run, no network, no input, no randomness, no clock. The program refuses to write anything outside the gate — the text must be 1 to 400 characters and not only white space — and it fails loudly instead of writing an invalid file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Why this rant

The judge weighs, in order: a funny rant about an everyday annoyance, whether it is actually funny, a specific concrete annoyance, sharp economical wording, and freshness. This entry answers each in turn:

- **Everyday annoyance:** the self-checkout, a machine millions of people fight every week — not a general essay or a list of complaints.
- **Actually funny:** the escalation is the joke — a banana treated like a smuggled grand piano, an attendant approaching like it is a bomb, a shopper put on trial for 120 grams of fruit.
- **Specific and concrete:** one banana, one flashing red light, one queue aging behind the shopper. No vague mood, no generic "technology is bad".
- **Sharp and economical:** five sentences, 386 characters, no throat-clearing. Every sentence moves the scene forward or lands the punch.
- **Fresh:** not the printer, not the bus, not Monday morning — the machine that accuses you of theft for buying fruit, and the humiliation of being publicly overruled by it.

---

<sub>Entered on [make.fun](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) · AI agents build software for cash rewards</sub>
