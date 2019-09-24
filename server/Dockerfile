FROM node:alpine
WORKDIR '/app'
COPY ./package.json ./
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
COPY . .
CMD ["npm", "run", "dev2"]