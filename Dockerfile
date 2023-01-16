FROM node:18-alpine as base

FROM base as builder

WORKDIR /home/node
COPY package*.json ./
COPY payload.config.ts ./payload.config.ts

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node
COPY package*.json  ./

RUN yarn install --production
COPY --from=builder /home/node/dist ./dist
COPY --from=builder /home/node/build ./build
COPY --from=builder /home/node/dist/payload.config.ts ./dist/payload.config.ts

EXPOSE 3000

CMD ["node", "dist/server.js"]

