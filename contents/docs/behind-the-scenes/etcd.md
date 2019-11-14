---
title: 'Etcd'
description: "A key/value database for all things cloud native"
root: "/docs"
parents: ["Behind the Scenes"]
date: "2019-11-14"
---

[etcd](https://etcd.io) is a key-value storage system that Kubernetes uses. Also, a lot of other cloud native systems use it.

It's important because the key/value pairs are distributed across a _cluster_ of machines, and none of them will ever bey out of sync \(i.e. [strong consistency](https://en.wikipedia.org/wiki/Strong_consistency)\). It also lets you subscribe to a stream of actions that anyone does to the cluster

