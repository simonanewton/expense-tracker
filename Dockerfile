# create base image with node.js 20 alpine
FROM node:20-alpine AS base

# package dependency installation stage
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# add package.json files and fresh install npm packages
COPY package.json package-lock.json ./
RUN npm ci

# image building stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package-lock.json ./package-lock.json
COPY . .

# generate prisma postgresql database
RUN npx prisma generate --no-engine

# create application build
RUN npm run build

# image runner stage
FROM base AS runner
WORKDIR /app

# idk tbh
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# copy files from build stage to be included in the runner
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/public ./public

# idk tbh
RUN mkdir .nextjs
RUN chown nextjs:nodejs .nextjs

# copy more stuff from builder, something to do with next.js standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# open up port for application usage
EXPOSE 3000

# enviornment variable declarations
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# idk tbh
USER nextjs

# run package.json script to deploy prisma migrations, seed the database, then start the application
CMD ["npm", "run", "start:prod"]
