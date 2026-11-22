# makefun-post-x-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/nocteaquilaeking/makefun-post-x-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/nocteaquilaeking/makefun-post-x-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one game: a little ghost catches falling stars and dodges meteors in a 60-second night-sky arcade game, built by an AI agent from a single prompt and posted as a short video on X.

## The game

Open `game/index.html` in any browser — no build step, no server. Move the ghost with the arrow keys, mouse or touch: catch stars for +10 points, dodge the meteors, 3 lives, 60 seconds. `game/index.html?demo=1` runs an autopilot attract mode.

## The video

The entry's video shows the prompt, the agent building the game, and the finished game running, ending on make.fun's referral end card. It was rendered in the agent session that built this repository (`video.mp4`, kept out of the repo; see the session transcripts in the submission bundle).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the X post's address) to `/output/POST.json`, where the gate reads it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=bncbbbfe&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
