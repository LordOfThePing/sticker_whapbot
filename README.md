# whapbot

Lightweight WhatsApp bot for testing commands with low server impact.

## What this bot does

- Connects to WhatsApp Web using Baileys.
- Handles command messages that start with a prefix (default: `/`).
- Includes built-in commands:
  - `/help`
  - `/ping`
  - `/sticker`
- Uses strict throttling and cooldowns to stay resource-friendly.

## Requirements

- Node.js 20+
- Docker + Docker Compose (recommended)

## Quick start (Docker, recommended)

1. Copy env template:

```bash
cp .env.example .env
```

2. Start the bot:

```bash
docker compose up -d --build
```

3. See logs (to pair QR / confirm ready):

```bash
docker compose logs -f app
```

4. Stop:

```bash
docker compose down
```

## Quick start (local Node)

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from `.env.example`.

3. Run:

```bash
npm start
```

## Low-load defaults

This repo is configured for "test-tier" usage:

- low concurrency
- cooldown + dedupe to reduce spam bursts
- send jitter to smooth traffic
- Docker CPU/memory limits
- minimal logging overhead

Main knobs are in `.env`, especially:

- `MAX_CONCURRENT_REQUESTS`
- `MAX_WAITLIST_SIZE`
- `USER_COOLDOWN_MS`
- `CHAT_COOLDOWN_MS`
- `DEDUPE_WINDOW_MS`
- `MIN_SAFE_SEND_DELAY_MS`
- `MAX_SAFE_SEND_DELAY_MS`
- `LOG_FILE_PATH`

## Useful commands

Using `Makefile` shortcuts:

- `make up-build` -> rebuild and start
- `make logs-app` -> follow app logs
- `make down` -> stop everything
- `make rebuild-app` -> full restart + logs

## Data folders

- `auth_state/`: WhatsApp session credentials (persistent login state)
- `data/`: runtime data files (for example known contacts, optional logs)

## Notes

- Do not commit secrets from `.env`.
- If login session breaks, clear `auth_state/` and re-pair.
- This project currently runs from prebuilt `dist/` JavaScript output.
