FROM buildpack-deps:bookworm

## go
COPY --from=golang:1.21 /usr/local/go/ /usr/local/go/
ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn,direct

## nodejs
COPY --from=node:20.10 /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node:20.10 /usr/local/bin /usr/local/bin/
RUN corepack enable pnpm
## python
COPY --from=python:3.11 /usr/local /usr/local
RUN ldconfig
RUN pip install pytest

## rust
COPY --from=rust:1.74.1 /usr/local /usr/local
ENV CARGO_HOME=/usr/local/cargo
ENV RUSTUP_HOME=/usr/local/rustup
ENV RUST_VERSION=1.74.1

## 配置
ENV PATH="/usr/local/go/bin:/usr/local/cargo/bin:${PATH}"
