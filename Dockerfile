FROM node:20-alpine
RUN mkdir app
WORKDIR /app
COPY . /app
RUN npm install --production
CMD ["node", "src/server.js"]