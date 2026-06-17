# Runtime image for prebuilt dist/ output (no TS compile step in container).
FROM node:20-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends ffmpeg ca-certificates fonts-dejavu-core \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
COPY patches ./patches

RUN npm ci \
  && npm prune --omit=dev

COPY dist ./dist

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
