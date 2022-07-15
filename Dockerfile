FROM node:7
WORKDIR /start
COPY package.json /start
RUN npm install
COPY . /start
CMD node server.js
EXPOSE 4141