# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy web app
COPY web/package*.json ./
RUN npm ci

COPY web/ ./
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY web/package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

EXPOSE 3000

CMD ["npm", "start"]
