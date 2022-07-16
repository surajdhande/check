FROM node:7
WORKDIR /app
COPY package.json /start
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 4141