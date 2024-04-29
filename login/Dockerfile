FROM node:22-alpine3.19
WORKDIR /login
COPY package*.json /login
RUN npm install
RUN npx tsc --init
COPY . /login
CMD [ "npm", "run", "dev" ]
EXPOSE 4001