FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install 
RUN apk update && apk add bash
COPY . .
EXPOSE 9999

CMD ["npm", "run", "start"]
