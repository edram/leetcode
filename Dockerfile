FROM debian:bullseye-slim

COPY --from=golang:1.19.0 /usr/local/go/ /usr/local/go/


ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn,direct


ENV PATH="/usr/local/go/bin:${PATH}"