# Agent Guide for `whapbot`

This document is for AI/code agents working on this repository. It is intentionally detailed.

## 1) Repository at a glance

- Runtime: Node.js (ESM)
- Entry point: `dist/index.js`
- Package manager: npm
- Main transport: WhatsApp Web via Baileys (`@whiskeysockets/baileys`)
- Deploy mode: Docker Compose (single service `app`)
- Current codebase state: this repo contains compiled runtime code under `dist/` (no TypeScript source present in the workspace at this time)

## 2) Project layout

- `dist/index.js`  
  Bootstraps the bot client, connects to WA, and sets global error handlers.
- `dist/config.js`  
  Reads and normalizes environment variables.
- `dist/structures/BajigurClient.js`  
  Core client wiring (socket, logger, handlers, safety utilities).
- `dist/structures/Command.js`  
  Command base class + command loader/dispatcher.
- `dist/structures/Listener.js`  
  Event listener base class + listener loader/registrar.
- `dist/listeners/*.js`  
  Runtime event handlers (`connection.update`, `creds.update`, `messages.upsert`).
- `dist/commands/general/*.js`  
  Built-in commands (`help`, `ping`, `sticker`).
- `dist/utils/*.js`  
  Queue/throttle, safety policy, sender pacing, and helpers.
- `docker-compose.yml`  
  Main deployment definition with resource constraints.
- `Dockerfile`  
  Runtime image for prebuilt `dist/`.
- `.env.example`  
  Canonical config template.

## 3) Runtime architecture and flow

1. `dist/index.js` creates `BajigurClient` and calls `connect()`.
2. `BajigurClient.connect()`:
   - loads auth state from `auth_state/`
   - fetches latest WA Web version
   - creates WA socket
   - attaches initial `connection.update` callback for QR/link code handling
   - initializes listener handler
3. Listener handler scans and registers listeners from `dist/listeners/`.
4. On `connection.open`, `ConnectionUpdateListener` initializes command handler.
5. Command handler scans and registers commands from `dist/commands/`.
6. On incoming message (`messages.upsert`):
   - message text/caption extraction
   - prefix check
   - safety checks (`SafetyPolicy`)
   - queue enqueue (`ThrottleQueue`)
   - command dispatch

Key control chain for load behavior:

- inbound gating: `SafetyPolicy.evaluateInbound()`
- work admission: `ThrottleQueue.enqueue()`
- outbound pacing: `SafeSender.send()`

## 4) Config model (`.env` / `dist/config.js`)

### Identity / command behavior

- `BOT_NAME`
- `STICKER_PACK_NAME`
- `PREFIX`
- `DEVS`
- `PAIR_PHONE`

### Throughput and anti-spam

- `MAX_CONCURRENT_REQUESTS`
- `MAX_WAITLIST_SIZE`
- `USER_COOLDOWN_MS`
- `CHAT_COOLDOWN_MS`
- `DEDUPE_WINDOW_MS`
- `BUSY_MESSAGE`
- `TOO_BUSY_MESSAGE`

### Outbound safety

- `MIN_SAFE_SEND_DELAY_MS`
- `MAX_SAFE_SEND_DELAY_MS`
- `ALLOW_EXISTING_CHATS_ONLY`
- `KNOWN_CONTACTS_PATH`

### Logging and WA init

- `NODE_ENV`
- `LOG_FILE_PATH`
- `LOG_MAX_STRING_CHARS`
- `FIRE_INIT_QUERIES`

## 5) Important operational behavior

### 5.1 Session handling

- Multi-file auth state is stored in `auth_state/`.
- `creds.update` listener persists credentials.
- On specific disconnect/logout scenarios, auth state can be cleared and re-pair required.

### 5.2 Command loading assumptions

- Commands are discovered dynamically by file scan.
- Category is derived from parent directory name.
- Metadata is applied via decorator and merged with defaults.

### 5.3 Listener loading assumptions

- Listeners are discovered dynamically and attached to `socket.ev`.
- Event name comes from metadata decorator (`name`).

### 5.4 Safety and queue behavior

- If queue is near full (>=85%), bot may send `BUSY_MESSAGE`.
- If queue is full and task is rejected, bot may send `TOO_BUSY_MESSAGE`.
- Notification spam is reduced by `shouldNotify` windows.

## 6) How to add a command (current compiled-code workflow)

Because only `dist/` is present, edits are made directly in compiled JS for now.

1. Add file under `dist/commands/<category>/<YourCommand>.js`.
2. Extend `Command`.
3. Ensure metadata decorator has:
   - `name`
   - optional `aliases`
   - `description`
   - `usage`
4. Implement `run(args, data)`.
5. Use `this.client.safeSend(...)` instead of direct socket sends where possible (for pacing/guardrails).
6. Restart process and confirm registration in logs.

Recommended: migrate to source-first (TypeScript) workflow in the future, then build to `dist/`.

## 7) How to add a listener

1. Add file under `dist/listeners/`.
2. Extend `Listener`.
3. Decorate with event metadata (`name` equals WA event string).
4. Implement `run(...)`.
5. Restart and verify "Registered ... listener." in logs.

## 8) Deployment and environment notes

### Docker Compose (`docker-compose.yml`)

Current service includes resource limits intended for low-load test mode:

- `cpus: 0.50`
- `mem_limit: 512m`
- `memswap_limit: 512m`
- `pids_limit: 128`
- `cpu_shares: 128`
- `restart: on-failure:5`

Paths:

- bind `./auth_state:/app/auth_state`
- bind `./data:/data`

### Dockerfile

- Uses `node:20-bookworm-slim`
- Installs `ffmpeg` + certs
- Runs `node dist/index.js`

## 9) Testing and validation checklist for agents

When changing behavior, validate in this order:

1. Static sanity:
   - `docker compose config`
2. Boot:
   - `docker compose up -d --build`
   - `docker compose ps`
3. Runtime:
   - `docker compose logs --tail 100 app`
4. Resource:
   - `docker stats --no-stream whapbot`
5. Functional:
   - test `/help`, `/ping`, `/sticker`
6. Load behavior:
   - simulate quick repeated commands from 2-3 testers
   - verify busy/defer behavior is graceful

## 10) Known quirks and gotchas

- `dist/config.js` currently references `process.env.STICKER_PACK` when setting `STICKER_PACK_NAME` fallback branch, while env variable naming elsewhere uses `STICKER_PACK_NAME`. Treat this carefully if modifying that logic.
- Direct editing in `dist/` is fragile and harder to maintain.
- `SafeSender` serializes all sends through an internal promise chain; this is intentional for pacing.
- `ALLOW_EXISTING_CHATS_ONLY=true` can make replies silently skip unknown contacts.
- Sticker command can be CPU-intensive on large media and uses temporary files in cwd.

## 11) Security and privacy guardrails

- Never commit `.env` or real phone numbers/tokens beyond intended test values.
- Avoid logging raw sensitive payloads.
- Keep `LOG_MAX_STRING_CHARS` conservative.
- Be careful when modifying auth/session cleanup logic; accidental clears force re-pair.

## 12) Recommended roadmap (if repo evolves)

1. Restore/add source tree (TypeScript or unminified JS).
2. Introduce explicit test suite for:
   - command parsing
   - safety policy timing
   - queue admission behavior
3. Add CI checks (lint + smoke test).
4. Move operational runbooks into `docs/`.
5. Keep `README.md` simple; keep this file detailed for autonomous agents.

## 13) Quick command reference for agents

- Start (compose): `docker compose up -d --build`
- Stop: `docker compose down`
- Logs: `docker compose logs -f app`
- Validate compose: `docker compose config`
- Runtime metrics: `docker stats --no-stream whapbot`
- Local run (if needed): `npm start`

## 14) Editing strategy for future agents

- Prefer minimal, localized changes.
- Preserve low-load defaults unless task explicitly requires more throughput.
- If changing config semantics, update both `.env.example` and docs.
- If adding user-facing behavior, keep messages short and failure-safe.
- After significant edits, always run at least compose config + startup log checks.
