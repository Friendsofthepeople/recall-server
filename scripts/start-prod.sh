#!/bin/bash

set -e
yarn start
exec "$@"
