FROM node:13-alpine3.10
RUN mkdir -p /home/dragonmailer
COPY . /home/dragonmailer
WORKDIR /home/dragonmailer
RUN npm install
EXPOSE 4343
CMD ["node", "dragon.js"]