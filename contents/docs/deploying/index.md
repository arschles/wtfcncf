---
title: "Deploying your apps
root: "/docs"
parents: ["Deploying"]
---

# Deploying your apps to production

We used to have puppet, salt, ansible, chef, and all the other awesome config management systems, right? Some of us (including me!) used to SCP a binary to a VM to deploy. It's different in cloud native land.

To deploy, you have to:

- Build your app
- Build an image
- Push the image to an image registry
- Tell Kubernetes to pull the new image and run it
- Do other fancy things!

Deploying is more involved than it was before, but we can take advantage of tools and features to make it safer and more reliable too.

Let's check out some tools we can use to do just that.

- [Helm](./helm)
- [CNAB](./cnab)