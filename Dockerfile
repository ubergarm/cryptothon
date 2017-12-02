FROM node:alpine

RUN apk add --no-cache git python g++ make \
    && npm install -g truffle

RUN mkdir -p /src
WORKDIR /src

ENTRYPOINT ["truffle"]
