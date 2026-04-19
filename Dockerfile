# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy web app
COPY web/package*.json ./
RUN npm install

COPY web/ ./
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY web/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/lib ./lib
RUN mkdir -p ./public

EXPOSE 3000

CMD ["npm", "start"]
