docker network create --driver bridge --attachable recall-network
docker compose up $@
