FROM node:20-slim as installer

WORKDIR /tmp/app

# Install app dependencies
COPY . .
RUN yarn install

FROM node:20-slim as runner

# create the app user
RUN addgroup --system app && adduser --system app

RUN apt-get update && apt-get upgrade -y && apt-get install -y \
    && apt-get install -y curl binutils && apt-get install openssl -y

ENV APP_HOME=/app

WORKDIR $APP_HOME

RUN mkdir -p $APP_HOME/logs
RUN chmod -R 755 $APP_HOME/logs

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY --from=installer /tmp/app/node_modules ./node_modules

COPY . .
RUN chown -R app:app $APP_HOME
RUN chmod -R 755 $APP_HOME
USER app

EXPOSE $PORT

ENTRYPOINT ["yarn", "dev"]
