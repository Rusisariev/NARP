FROM node:14.19.3-alpine

WORKDIR /app-back

COPY package*.json ./

RUN npm i

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]