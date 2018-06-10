FROM node:8.9.4
ARG backend_url
ARG google_cliend_id
ARG facebook_app_id
ARG google_maps_api_key

WORKDIR /usr/src/app

ENV PORT=8080

ENV NODE_ENV=production

ENV BUILD=1

ENV BACKEND_URL=$backend_url

ENV GOOGLE_CLIENT_ID=$google_cliend_id

ENV FACEBOOK_APP_ID=$facebook_app_id

ENV GOOGLE_MAPS_API_KEY=$google_maps_api_key

COPY . /usr/src/app/

RUN npm install

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "forever" ]
