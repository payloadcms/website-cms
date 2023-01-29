FROM node:18-alpine

#FROM base as builder

#WORKDIR /home/node
#COPY package*.json ./
#COPY /src/payload.config.ts ./payload.config.ts

#COPY . .
#RUN yarn install
#RUN yarn build

#FROM base as runtime

#ENV NODE_ENV=production

#WORKDIR /home/node
#COPY package*.json  ./

#RUN yarn install --production
#COPY --from=builder /home/node/dist ./dist
#COPY --from=builder /home/node/build ./build
#COPY --from=builder /home/node/dist/payload.config.ts ./dist/payload.config.ts

#EXPOSE 3000

#CMD ["node", "dist/server.js"]



#FROM node:18-alpine

ENV TZ=Europe/Zurich

RUN apk add --no-cache tzdata && \
    apk --no-cache upgrade && \
    mkdir /user && \
    echo 'nobody:x:65534:65534:nobody:/:' > /user/passwd && \
    echo 'nobody:x:65534:' > /user/group

# Set the working directory
WORKDIR /app

# Copy the Payload CMS code into the container
COPY . .

# Install dependencies
RUN npm install

# Build the Payload CMS for production
RUN npm run build

# Expose the default Payload CMS port
EXPOSE 3000

# Set the command to start the Payload CMS in production
CMD ["npm", "serve"]
