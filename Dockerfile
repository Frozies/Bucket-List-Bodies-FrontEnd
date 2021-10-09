FROM node:14-alpine

EXPOSE 3000:3000/tcp

WORKDIR /frontend
ADD . /frontend

RUN npm install
RUN npm run build
RUN npm run export

CMD ["npm", "run", "start"]