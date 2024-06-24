#!/bin/bash

set -e
npm install -g nx
yarn dev
exec "$@"
