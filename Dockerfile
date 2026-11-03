FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY src ./src
COPY server.js .

EXPOSE 3000

CMD ["npm", "start"]