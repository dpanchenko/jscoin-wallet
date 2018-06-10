FROM node:8.11.2
ARG backend_url

WORKDIR /usr/src/app

ENV PORT=8080

ENV NODE_ENV=production

ENV BUILD=1

ENV BACKEND_URL=$backend_url

COPY . /usr/src/app/

RUN npm install

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "forever" ]
