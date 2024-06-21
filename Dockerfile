FROM node:20-slim as builder

ARG TAG=latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .


FROM node:20-slim as runner

# create the app user
RUN addgroup --system app && adduser --system app

RUN apt-get update && apt-get upgrade -y && apt-get install -y \
    && apt-get install -y curl binutils

# create the app user
RUN addgroup --system app && adduser --system app

ENV HOME=/usr/src/app
ENV APP_HOME=/home/app/web

# Create app directory and navigate to it
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

# copy the app from the builder
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/yarn.lock .

# Install app dependencies
RUN HOME=$(pwd) yarn install --frozen-lockfile


# COPY the other files
COPY . .

# copy startup script
COPY ./scripts/start-dev.sh .
RUN chmod +x $APP_HOME/start-dev.sh

RUN chown -R app:app $APP_HOME
USER app

EXPOSE $PORT

CMD ["./start-prod.sh"]



