FROM debian:bookworm-slim

COPY --from=golang:1.21 /usr/local/go/ /usr/local/go/
## nodejs
COPY --from=node:20.10 /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node:20.10 /usr/local/bin /usr/local/bin/
RUN rm -rf /usr/local/bin/yarn*
## python
COPY --from=python:3.11 /usr/local /usr/local
RUN ldconfig


ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn,direct


ENV PATH="/usr/local/go/bin:${PATH}"
