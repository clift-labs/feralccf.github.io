---
sidebar_position: 2
id: quick-start-with-docker
title: Quick Start Using Docker
---

We have created a project you can fork and start building your own project with Docker built in.
This project has the Dockerfile which provides the base PHP-FPM. It also contains the docker-compose file
to make it easy to include Nginx and the project's app image. 

## Step 1: Fork the repository

## Step 2: Clone your fork locally

After you have forked the repo, you need to clone it to your development environment
to start building. 

```bash 
git clone ssh://john@example.com/path/to/my-project.git 
cd my-project 
```
## Step 3: Build the Feral Docker Image

Once you have cloned the repository locally, you'll need to build the docker image. To
build the image, you'll need to cd into the docker directory of your project and use the
Makefile target `build` to build the image.

:::caution
This could take several minutes to build.
:::

```bash 
cd docker
make build
```

## Step4: Start the container

Once the Docker image is built, you can create a container with the image. Using the 
`start` target in the Make file

```bash 
# from the docker directory
make start
```

In the current terminal window you'll see information from the `docker/bin/startup` script. 
Once you see PHP-FPM is ready to handle connections, you can create a terminal window.

```bash 
# in a seperate terminal window or tab
# from the docker directory
make term
```

At this point you should have two terminal windows or tabs. You can see the output of
each container in the initial window.

## Step5: Install Symfony and Feral Inline


## Step6: Run Feral commands
