FROM node:lts-alpine3.15

WORKDIR /app

COPY package* .

RUN npm i

COPY . .

CMD node app.js