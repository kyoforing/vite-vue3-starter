# build stage
FROM node:lts-alpine as build-stage
ARG env
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build --mode=$env

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]