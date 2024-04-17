# Etapa de construção
FROM node:latest as build

# Configuração do ambiente de compilação
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build

# Etapa de execução
FROM nginx:latest
# Configuração opcional do Nginx
EXPOSE 80
# Copia os arquivos de build da etapa de compilação para o servidor Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
