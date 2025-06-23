# Etapa 1: Construcción
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm audit fix
RUN npm install -g vite
COPY . .
RUN npm run build

# Etapa 2: Servir contenido
FROM nginx:alpine

WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5173
