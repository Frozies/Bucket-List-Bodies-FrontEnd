FROM node:14-alpine

EXPOSE 4000:4000/tcp

WORKDIR /frontend
ADD . /frontend

RUN npm install

CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]