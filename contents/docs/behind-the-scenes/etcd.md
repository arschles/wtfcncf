---
title: 'Etcd'
description: "A key/value database for all things cloud native"
date: 2010-11-14T15:14:39+10:00
weight: 2
bookToc: false
notoc: true
menu: "main"
---

[etcd](https://etcd.io) is a key-value storage system that Kubernetes uses. Also, a lot of other cloud native systems use it.

It's important because the key/value pairs are distributed across a _cluster_ of machines, and none of them will ever bey out of sync \(i.e. [strong consistency](https://en.wikipedia.org/wiki/Strong_consistency)\). It also lets you subscribe to a stream of actions that anyone does to the cluster

