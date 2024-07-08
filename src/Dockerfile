FROM node:lts-alpine
RUN npm install -g @dotenvx/dotenvx
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

# RUN --mount=type=secret,id=WEBSOCKET_ENDPOINT \
#   --mount=type=secret,id=PORT \
#   --mount=type=secret,id=CONTACT_EMAIL \
#   --mount=type=secret,id=JWT_ACCESS_SECRET \
#   --mount=type=secret,id=JWT_REFRESH_SECRET \
#   --mount=type=secret,id=DATABASE_URL \
#   --mount=type=secret,id=SENTRY_DSN \
#   --mount=type=secret,id=SENTRY_PROJECT \
#   --mount=type=secret,id=SENTRY_ORG \
#   --mount=type=secret,id=SENTRY_AUTH_TOKEN \
#   bash -c 'export WEBSOCKET_ENDPOINT=$(cat /run/secrets/WEBSOCKET_ENDPOINT) && \
#   export PORT=$(cat /run/secrets/PORT) && \
#   export CONTACT_EMAIL=$(cat /run/secrets/CONTACT_EMAIL) && \
#   export JWT_ACCESS_SECRET=$(cat /run/secrets/JWT_ACCESS_SECRET) && \
#   export JWT_REFRESH_SECRET=$(cat /run/secrets/JWT_REFRESH_SECRET) && \
#   export DATABASE_URL=$(cat /run/secrets/DATABASE_URL) && \
#   export SENTRY_DSN=$(cat /run/secrets/SENTRY_DSN) && \
#   export SENTRY_PROJECT=$(cat /run/secrets/SENTRY_PROJECT) && \
#   export SENTRY_ORG=$(cat /run/secrets/SENTRY_ORG) && \
#   export SENTRY_AUTH_TOKEN=$(cat /run/secrets/SENTRY_AUTH_TOKEN) && \
#   export WITH_EMAIL_SERVICE=true && \
#   export ENGINE_VERSION=3 && \
#   npm build'

COPY . .
EXPOSE 8080
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
