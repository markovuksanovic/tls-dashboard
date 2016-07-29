FROM alpine

RUN apk --update add nodejs
RUN npm install -g http-server

COPY web_service /root/tls-dashboard/web_service
COPY node_app /root/tls-dashboard/node_app
WORKDIR /root/tls-dashboard

CMD http-server web_service
