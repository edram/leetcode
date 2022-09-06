FROM debian:bullseye-slim

COPY --from=golang:1.19.0 /usr/local/go/ /usr/local/go/
COPY --from=node:16.17 /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node:16.17 /usr/local/bin /usr/local/bin/

RUN rm -rf /usr/local/bin/yarn*


ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn,direct


ENV PATH="/usr/local/go/bin:${PATH}"