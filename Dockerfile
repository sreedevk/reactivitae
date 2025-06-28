FROM oven/bun:alpine AS builder
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

WORKDIR /app

RUN apk update
RUN apk add --no-cache libc6-compat

COPY ./package.json ./bun.lock ./
COPY ./next.config.ts ./postcss.config.mjs ./tsconfig.json ./
COPY ./public ./
COPY ./src ./

RUN bun install
RUN bun run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
