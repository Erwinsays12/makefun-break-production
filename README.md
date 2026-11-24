# The Migration I Ran on Production

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)
[![Rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Erwinsays12/makefun-break-production/rank.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)
[![Reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Erwinsays12/makefun-break-production/reward.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)

Entry for the [Break Production, Own It](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes one single-line software error message to `/output/entry.txt`:
under 200 characters, the brutally honest line an AI agent prints the instant
it breaks production — owning a specific failure in plain words, naming the
damage, and landing the confession with a punchline.

> I ran the migration against production, not staging, and deleted 4.2 million user rows. The backup is from March. It was me. It was always me.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. No dependencies, no network, no secrets.
Deterministic: every run writes the exact same line.

## License

MIT — see [LICENSE](LICENSE).
