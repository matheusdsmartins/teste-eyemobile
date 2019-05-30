FROM node:10-alpine as builder

WORKDIR /opt

RUN npm i npm@latest -g

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY package.json package-lock.json ./

RUN npm install \
  && npm cache clean --force

ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app

COPY . .

RUN npm run build:docker

FROM nginx:stable-alpine

COPY --from=builder /opt/app/dist /usr/share/nginx/html
COPY --from=builder /opt/app/nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]
