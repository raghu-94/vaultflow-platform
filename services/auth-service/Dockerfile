FROM node:20.19-alpine AS builder
RUN apk update && apk upgrade --no-cache
RUN npm install -g npm@11
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
FROM node:20.19-alpine AS runtime
RUN apk update && apk upgrade --no-cache
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN rm -rf /usr/local/lib/node_modules/npm \
    /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./
USER appuser
EXPOSE 3000
CMD ["node","src/index.js"]
