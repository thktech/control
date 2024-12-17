FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock .
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn run build

CMD ["yarn", "run", "start"]

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/yarn.lock .
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/build build
COPY --from=builder /app/public public

CMD ["yarn", "run", "start"]
