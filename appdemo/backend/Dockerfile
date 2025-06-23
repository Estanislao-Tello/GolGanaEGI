FROM node:20 AS builder 

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm audit fix
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
