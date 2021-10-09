FROM node:14-alpine

EXPOSE 3000:80/tcp

WORKDIR /frontend
ADD . /frontend

RUN npm install
RUN npm build

CMD ["npm", "run", "start"]