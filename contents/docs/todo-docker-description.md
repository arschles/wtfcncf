Docker is a tricky term. Docker is a [company](https://docker.com) but the name is also a technology. Weird, right!?!??!

## The Technology

Let's talk about the technology first. Docker introduced this idea of [containers](/container) to the open source "mainstream."

Containers are a combination of a lot of stuff that has been in various linux kernels for a while. To be specific, here are some of them:

- namespaces
- cgroups
- FreeBSD Jails

Docker created a common file format called an _image_ that their tech understands and runs as a _container_, and it uses all those above technologies (and more!) to create a kind of sandbox for the thing to run in.

All of this adds up to some cool stuff:

- Create an image that holds everything your app needs - dependencies, code, assets, and so on
- Run the image anywhere Docker can run. Local, CI/CD, production, and so on

## The History

The history behind Docker is _weird_, and understanding it helps when you're wading through the whirlwind of technologies. Docker the company introduced containers to the "mainstream" (the technology has been around for a long while, see "[container](/container)" for more on that), and they named their new technology ... you guessed it, `docker`...

They open sourced the code to [github.com/docker/docker](https://github.com/docker/docker). Go click on that link, though. It **actually** goes to `github.com/moby/moby` because the company renamed it. Now, `Docker` is the company name and `moby` is the technology they created. Woohoo!
