FROM node:20.10.0-alpine AS build

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

CMD ["npm", "start"]