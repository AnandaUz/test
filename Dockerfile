FROM node:20-slim

WORKDIR /app

COPY package*.json ./
COPY server/package*.json ./server/

RUN npm install

COPY . .

RUN npm run build:server

CMD ["node", "server/dist/server/src/index.js"]