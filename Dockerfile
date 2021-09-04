FROM node:16.8-alpine3.11

WORKDIR /digital-menu

ADD package.json /digital-menu

RUN npm install
