---
title: Introduction
root: '/docs'
parents: ['Get Started']
---

# Welcome to Cloud Native, Friend!

>[Cloud Native](https://cncf.io) technologies move incredibly fast. Use this site to keep up!

Use `WTF CNCF` as a super quick reference to keep up on **what a cloud native technology does** and **how you can use it for your app**, and that's it.

No, really, that's it. This site sticks to answering those two questions!

# How to use this site

We built this site with a reference guide in mind, so we hope that it'll be easy for you to quickly look up a project or technology and decide if you want to look into it further.

# Get Started

The next page in this book is on Cloud Native itself.

[Get Started](/read/cloud-native)

-----

* [CNAB](https://github.com/deislabs/cnab-spec): Kinda similar to OAM. This is a spec that talks about how to install, uninstall, and manage Applications. Not limited to Kubernetes, but of course the first and primary implementations are Kubernetes for now
* ... Speaking of, [Porter](https://github.com/deislabs/porter) is a Kubernetes-focused implementation
* But Docker has one that is just containers in [Docker App](https://github.com/docker/app)
* [gRPC](https://grpc.io): an [interface definition language](https://en.wikipedia.org/wiki/Interface_description_language) \(they are using [protocol buffers](https://developers.google.com/protocol-buffers/)\) that lets you write down the functions that your service will provide, language-agnostically. Also has a code generator to turn the IDL into clients and server stubs for your language. The code generator comes with runtime libraries to support the code it generates
* [etcd](https://etcd.io): a key-value storage system that Kubernetes uses. Also, a lot of other cloud native systems use it. It's important because the key/value pairs are distributed across a _cluster_ of machines, and none of them will ever bey out of sync \(i.e. [strong consistency](https://en.wikipedia.org/wiki/Strong_consistency)\). It also lets you subscribe to a stream of actions that anyone does to the cluster
* [TUF](https://theupdateframework.github.io/): A framework that you can use in your software that lets you update your stuff "over-the-air" securely. That means that you can do continuous updates kind of like you would do with your CI/CD system for a web app, instead of distributing patches that users have to opt-in to installing. Google Chrome uses a system kind of \(but not exactly\) like this - that's why you never have to manually update it
* [Tilt](https://tilt.dev/): an all-in-one tool that lets you set up your local development environment for writing apps on Kubernetes. It has a file where you write down all the information of your app -- like where the `Dockerfile` is, how to build and push the docker image, etc... -- and then it watches your code. When you change anything, it automatically rebuilds the image, pushes it, and re-deploys it to Kubernetes. It also supports multiple different apps \(it calls them microservices\) at once, and gives a terminal UI and a browser dashboard to see everything that's going on in your cluster \(e.g. logs, builds, etc...\)
* [Helm](https://helm.sh/): a format called _charts_ that lets you group together all the Kubernetes YAML that makes up your app, and a CLI tool that lets you install, update and delete the charts from your Kubernetes cluster. You can parameterize the Kubernetes YAML \(so that you can change things each time you install or update them in a cluster\), and the tool lets you set the parameters from a file or on the command line. The tool also keeps track of your updates \(it calls them "releases"\) so you can roll back, audit, etc...
* [Draft](https://draft.sh/): kind of like tilt, but it also has a way to set up your app to be ready to deploy to Kubernetes in either dev or production. You run a command and it uses [draft packs](https://github.com/Azure/draft/tree/master/packs) \(kind of like build packs originally from Heroku\) to detect the language/technology your app is written in, and then it generates a Dockerfile, Helm chart, etc...

## Service Mesh

Basically a sidecar that your app talks to instead of talking directly to other services. The sidecar takes care of forwarding your message to the other app, and gives you extra goodies like:

* end-to-end SSL
* retries
* timeouts

There is also a _control plane_ that lets you control all these sidecar containers, because if you're running lots of replicas of your app, you're gonna also be running lots of sidecar containers

Service meshes don't have to be just for Kubernetes, but most are:

* [Istio](https://istio.io/)
* [Linkerd](https://linkerd.io/)
* [Consul Mesh](https://www.hashicorp.com/products/consul/service-mesh)

