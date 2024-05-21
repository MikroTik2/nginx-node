FROM alpine:latest

EXPOSE 3000
EXPOSE 80

USER root

RUN mkdir /app

RUN apk update
RUN apk add bash
RUN apk add openrc
RUN mkdir /run/openrc && touch /run/openrc/softlevel
RUN rc-status

RUN apk add nginx
RUN rc-update add nginx

RUN apk add nodejs
RUN apk add npm
RUN npm i -g npm
RUN npm i -g pm2
RUN npm i -g @loopback/cli