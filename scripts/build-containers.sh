#!/bin/sh

docker build -t tls-dashboard .
docker build -f Dockerfile.cron -t tls-dashboard-cron .

# docker push markovuksanovic/tls-dashboard
# docker push markovuksanovic/tls-dashboard-cron
