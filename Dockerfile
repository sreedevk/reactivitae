FROM oven/bun:alpine AS builder
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

WORKDIR /app

RUN apk update
RUN apk add --no-cache libc6-compat

COPY .git ./
COPY package.json bun.lock ./
COPY tsconfig.json tsconfig.node.json vite.config.ts tailwind.config.js postcss.config.js ./
COPY index.html index.html
COPY src src
COPY public public

RUN bun install --include=dev
RUN bun run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
