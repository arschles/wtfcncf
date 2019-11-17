---
title: "gRPC"
root: '/docs'
parents: ['Production Details']
---

# gRPC

https://grpc.io

## What gRPC Is

Grpc is a framework for remote procedure calls, otherwise known as RPC. The framework is split into three pieces:

- You write your service's functionality with [protocol buffers](https://developers.google.com/protocol-buffers/)
- You run the gRPC toolchain to generate clients and server stubs that you then implement. The toolchain supports a bunch of different languages, all through plugins
- gRPC has runtime libraries for all the languages it supports that handle low level details like wire encoding and so on

## Why 