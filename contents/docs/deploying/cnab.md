---
title: "CNAB"
date: 2019-11-14T13:14:13-08:00
type: "docs"
---

>**C**loud **N**ative **A**pplication **B**undles

[https://cnab.io/](https://cnab.io)

## What CNAB Does

CNAB is a specification for a way to package up your whole app, including all of its production dependencies. That means things like cloud-based databases, caches, DNS entries, and more. Really, anything with an API.

## How you can use it in your app

Since CNAB is a specification, there are tools out there that implement it. The way you use all of those tools is mostly the same:

- First, you build Docker images each that have scripts in them to install, uninstall and update one single part of your app.
- Then, you tell the tool how you want to stitch together all of those Docker images to deploy your entire app. The tool then takes care of stitching them together, running them properly, retries, etc...

>Since the tools work with images, there are a bunch that you can take off the shelf too

>CNAB is not limited to Kubernetes, but in practice it's focused on Kubernetes for now