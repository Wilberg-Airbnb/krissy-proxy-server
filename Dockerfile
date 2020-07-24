FROM node:10

WORKDIR /usr/src/app

# why the *
COPY package.json .
RUN npm install

COPY . .



