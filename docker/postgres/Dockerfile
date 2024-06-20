FROM postgres:16

# Install postgis and other extensions inside the postgres container
RUN apt-get update \
    && apt-get install curl -y \
    && apt-get install gnupg -y \
    && apt-get install build-essential -y \
    && apt-get install software-properties-common -y \
    && apt-get install ca-certificates -y \
    && apt-get install wget -y \
    && apt-get install postgresql-16-postgis-3 -y \
    && apt-get install postgis -y

CMD ["/usr/local/bin/docker-entrypoint.sh","postgres"]
