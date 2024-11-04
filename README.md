# Docker_app

## Description - https://hub.docker.com/ https://docs.docker.com/guides/nodejs/containerize/

- `https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7` watch Netninja

Docker is a fantastic tool to add to your skill set, especially as a developer already working with a broad stack as a full-stack developer. It simplifies creating, deploying, and running applications by using containers, which package your application along with all dependencies it needs, so it works seamlessly in any environment.

## Here’s why Docker is so beneficial:

- Environment Consistency: Docker ensures that your application runs the same way across different environments (dev, testing, staging, production, CI/CD), reducing the "works on my machine" problem. This consistency is particularly useful when moving from development to production.

- Isolation: Each container runs in its isolated environment, which helps avoid conflicts between different dependencies or services.

- Resource Efficiency: Docker containers are lightweight compared to virtual machines, using fewer resources and starting up faster, which is ideal for deploying microservices.

- Easy Scaling and Deployment: With Docker, you can deploy your applications in various environments and easily scale them up and down.

## Getting Started

Here's a quick roadmap to start learning Docker:

- Understand Containers and Images:

Docker works by creating containers from images. Think of an image as a blueprint and a container as a running instance of that blueprint.
You’ll need to understand basic Docker commands like `docker run, docker build, docker pull, and docker push`.

## Dockerfile:

Learn how to write a Dockerfile, a script that defines how to build an image for your app. A Dockerfile includes commands to copy code, install dependencies, expose ports, and define startup commands.

## Docker Compose:

Docker Compose is a tool that helps you define and manage multi-container Docker applications (e.g., setting up a Node.js app with a MySQL database). With Docker Compose, you can define all the services in a `docker-compose.yml` file and start them with a single command.

## Networking and Volumes:

Docker allows containers to communicate with each other and with the host machine through networking. Volumes are used to persist data even if a container is deleted, which is useful for databases or any data storage that needs to survive container restarts.

## Deploying Docker Containers:

Once comfortable with development, look into deploying containers to production environments, like cloud platforms `(AWS, GCP, Azure)` or services specifically designed for Docker, like `Docker Swarm or Kubernetes`.
Experiment with a Small Project:

We can Create a Dockerized version of my Node.js or React applications in my Github, including any databases. And try using Docker Compose to manage the different parts and explore the benefits of containerization.

## Resources

- Docker Documentation: The official Docker docs are very comprehensive.
- Docker Labs on GitHub: Docker Labs provides hands-on tutorials and guides for Docker beginners.
- Play with Docker: Docker’s free online sandbox lets you experiment with Docker without any installation.
- YouTube & Udemy Courses: There are great Docker courses that cover beginner to advanced concepts, with examples and projects - check out my youtube courses.

## Install on Windows

1.Download docker desktop app 2. use ` winver`` to check your pc is sufficient to run docker and WSL windows.
3. Go to  `https://learn.microsoft.com/en-us/windows/wsl/install` to install WSL e.g run `wsl --install` in admin mode in powershell/cmd then restart pc. enter the `wsl --install` command, then restart your machine. Restart your PC after running this command to ensure that WSL features are correctly enabled.
Once your computer restarts and you open the Ubuntu distribution for the first time, you’ll be prompted to create a Linux username and password 4. This command will enable the features necessary to run WSL and install the Ubuntu distribution of Linux. 5. The first time you launch a newly installed Linux distribution, a console window will open and you'll be asked to wait for files to de-compress and be stored on your machine. All future launches should take less than a second. 6. Note: The above command only works if WSL is not installed at all. If you run wsl --install and see the WSL help text, please try running `wsl --list --online` to see a list of available distros and run `wsl --install -d <DistroName>` to install a distro. 4. Change the default Linux distribution installed
By default, the installed Linux distribution will be Ubuntu. This can be changed using the -d flag.

To change the distribution installed, enter: `wsl --install -d <Distribution Name>`. Replace <Distribution Name> with the name of the distribution you would like to install.
To see a list of available Linux distributions available for download through the online store, enter: `wsl --list --online or wsl -l -o`.
To install additional Linux distributions after the initial install, you may also use the command: `wsl --install -d <Distribution Name>`. 6. Set up your Linux user info
Once you have installed WSL, you will need to create a user account and password for your newly installed Linux distribution.
Once the process of installing your Linux distribution with WSL is complete, open the distribution (Ubuntu by default) using the Start menu. You will be asked to create a User Name and Password for your Linux distribution.

This User Name and Password is specific to each separate Linux distribution that you install and has no bearing on your Windows user name.

Please note that whilst entering the Password, nothing will appear on screen. This is called blind typing. You won't see what you are typing, this is completely normal.

Once you create a User Name and Password, the account will be your default user for the distribution and automatically sign-in on launch.

This account will be considered the Linux administrator, with the ability to run sudo (Super User Do) administrative commands.

Each Linux distribution running on WSL has its own Linux user accounts and passwords. You will have to configure a Linux user account every time you add a distribution, reinstall, or reset.
Note: Linux distributions installed with WSL are a per-user installation and can't be shared with other Windows user accounts.
To change or reset your password, open the Linux distribution and enter the command: passwd. You will be asked to enter your current password, then asked to enter your new password, and then to confirm your new password.

If you forgot the password for your Linux distribution:

Open PowerShell and enter the root of your default WSL distribution using the command: wsl -u root

If you need to update the forgotten password on a distribution that is not your default, use the command: wsl -d Debian -u root, replacing Debian with the name of your targeted distribution.

Once your WSL distribution has been opened at the root level inside PowerShell, you can use this command to update your password: passwd <username> where <username> is the username of the account in the distribution whose password you've forgotten.

You will be prompted to enter a new UNIX password and then confirm that password. Once you're told that the password has updated successfully, close WSL inside of PowerShell using the command: exit.

Update and upgrade packages
We recommend that you regularly update and upgrade your packages using the preferred package manager for the distribution. For Ubuntu or Debian, use the command:

`sudo apt update && sudo apt upgrade`
Windows does not automatically update or upgrade your Linux distribution(s). This is a task that most Linux users prefer to control themselves.

- Use `wsl -l -v ` to know the version of WSL running in your machine

After installation and configuration of user details, then update and upgrade using `sudo apt update && sudo apt upgrade`

---

## Docker Image:

- Blueprint: An image is like a blueprint for a container, containing all necessary files, libraries, dependencies, and configuration.
- Read-only: It’s immutable (read-only) and remains unchanged during runtime.
- Build Stage: Created through a Dockerfile, which defines what the image should include (OS, apps, dependencies).
- Stored: Stored locally or in registries (like Docker Hub) to be used as templates for containers.
- Multiple Instances: Multiple containers can be created from a single image.

## Docker Container:

- Running Instance: A container is a running instance of a Docker image, providing an isolated environment for applications.
- Read/Write Layer: Containers have a writable layer, allowing data modifications, which are lost if the container is deleted (unless persisted).
- Lifecycle: Can be started, stopped, and deleted; runs as an independent, isolated process.
- Environment: Each container has its own network, storage, and system resources.
- Ephemeral: Meant to be temporary; once stopped or deleted, the changes are discarded unless saved in a volume.

---

- **In essence, images are templates, and containers are the running instances of those templates.**
- - E.g An image may have: Node 18v, .env files, commands, dependencies etc. while the container is a running instance of this image (isolated instance)
- So, an image is made up many layers incrementally e.g we start with
- a. the parent image: the Operating System (OS) and sometimes the runtime environmrnt.
- b. then we can build on top of the parent like source code, dependencies
- c. `https://hub.docker.com/` is the repo like github for docker images e.g search ``node` and see
- and see `https://hub.docker.com/_/node` the official nodejs image by docker
- then use `docker pull node` at any command line anywhere e.g cmd, powershell to add node image to your docker.
- When you run docker pull node, you’re essentially downloading a Docker image of Node.js from Docker Hub to use in your environment.
- This command pulls the latest official Node.js image from Docker Hub.
  You can specify a version, like docker pull node:18, to pull Node.js version 18.
  Create a Simple Node.js App:

In your project folder, create a server.js file with the following content:

```
const http = require('http');

const hostname = '0.0.0.0';  // Allows access from any IP
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Docker!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Write a Dockerfile:

In the same folder, create a file named Dockerfile (no extension) with the following content:

```
# Use the official Node.js image as the base image
FROM node:latest

# Create and set the working directory
WORKDIR /app

# Copy the local files to the container's app directory
COPY . .

# Install dependencies (if you have a package.json)
# RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]
```

This Dockerfile:
Uses the node image as the base.
Sets the working directory to /app.
Copies your project files into the container.
Exposes port 3000 (where the app listens).
Specifies the command to run the server.
Build the Docker Image:

Run the following command to build an image from the Dockerfile:

`docker build -t my-node-app .`

The -t flag tags your image with a name (my-node-app).
Run a Container from the Image:

Start a container based on your new image:
`docker run -p 3000:3000 my-node-app`

The -p 3000:3000 flag maps port 3000 on your local machine to port 3000 in the container.
Access the App:

Open a browser or use curl to go to http://localhost:3000, and you should see "Hello from Docker!".

## Summary

docker pull node: Pulls the Node.js image.
Dockerfile: Defines your custom image’s environment and instructions.
docker build: Builds an image from the Dockerfile.
docker run: Runs a container from your image.
This process gives you a simple Node.js app running in a Docker container!

---

if we use express js

- create serve.js

```
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
res.send('Hello from Docker and Express!');
});

app.listen(port, '0.0.0.0', () => {
console.log(`Server running at http://localhost:${port}/`);
});

```

then Dockerfile

```
# Use the official Node.js image as the base image
FROM node:latest

# Create and set the working directory
WORKDIR /app

# Copy the local files to the container's app directory
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]
```

In this setup:

RUN npm install installs the express dependency (make sure you have it listed in package.json). 3. Set Up package.json for Dependencies
Create a package.json file to define your app and its dependencies:

```
{
  "name": "my-docker-express-app",
  "version": "1.0.0",
  "description": "Simple Express app running in Docker",
  "main": "server.js",
  "dependencies": {
    "express": "^4.21.1"
  },
  "scripts": {
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC"
}
```

Run npm install in your local project folder (outside Docker) to generate package-lock.json, which Docker will use to install dependencies reliably. 4. Build and Run the Docker Image
Run these commands in the project directory:

a) Build the Docker Image

`docker build -t my-express-app .`

b) Run a Container from the Image
`docker run -p 3000:3000 my-express-app`

5. Access the App
   Open your browser or use curl to go to http://localhost:3000. You should see "Hello from Docker and Express!" displayed.

## Summary of Commands

docker pull node: Pulls the Node.js image.
Dockerfile: Defines the environment for your app.
docker build: Builds your custom Docker image.
docker run: Runs a container from the image, making the app accessible on your local machine.
Using Express.js in Docker is a great way to structure the application and manage dependencies for future scaling.

---

## Here’s how each option differs:

1. docker pull node
   This command pulls the latest full Node.js image.
   The default image is typically based on Debian or Ubuntu, which are larger and have more pre-installed utilities.
   Pros: Comes with a robust base OS, useful for projects needing many utilities.
   Cons: Larger size, slower build, and potentially more memory usage.
2. docker pull node:18
   This pulls a specific version of the Node.js image, in this case, version 18, but still with the default full operating system (Debian or Ubuntu).
   Pros: Locks your project to a specific Node version, which can be good for stability.
   Cons: Like the latest tag, it's still a larger image due to the default OS base.
3. docker pull node:18-alpine
   This pulls a lightweight Alpine-based Node.js image for version 18.
   Pros:
   Significantly smaller in size (often less than half the size of Debian-based images).
   Faster to download and deploy, saving time in environments where images are frequently pulled or built.
   Lower memory and storage requirements.
   Cons:
   Alpine Linux has a smaller set of default packages, so you may need to install additional packages for some Node modules to work (e.g., libc6-compat for some binaries).
   Some packages may not work out-of-the-box with Alpine, especially those that rely on glibc (Alpine uses musl libc).
   Using the Alpine-based Node.js image in a Dockerfile
   If you want to use the Alpine-based Node.js image for version 18, your Dockerfile would look like this:

```
# Use the official Node.js 18 Alpine image
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first, then install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]
```

With this setup:

Node: Uses the Alpine version of Node.js 18, reducing image size.
Dependencies: Only npm install is run for dependencies, keeping the image lean.

### Quick Size Comparison

To illustrate the size difference:

node:18: ~300-400 MB
node:18-alpine: ~50-70 MB

## Summary

Use node or node:18 if you need a full OS with more pre-installed packages or utilities.
Use node:18-alpine if you want a smaller, more efficient image, and are okay with manually adding any missing dependencies that Alpine might lack.
Choosing the Alpine variant is a good option for most Node.js applications where lightweight and speed are priorities.

---

Let’s break down each of these Docker commands:

1. docker build -t my-docker-app .
   This command is used to build a Docker image from the instructions defined in a Dockerfile.

Explanation of each part:
docker build: This initiates the process of building a Docker image.
-t my-docker-app: The -t flag is used to tag the image with a specific name (my-docker-app in this case). Tagging makes it easier to reference the image by this name instead of by an auto-generated image ID.
.: The dot at the end specifies the build context, which is the location of the files Docker will need to build the image. Here, . represents the current directory, which should contain the Dockerfile and any other necessary files for your app.
After running this command, Docker reads the Dockerfile (in the current directory) and creates an image according to the specified instructions, tagging it as my-docker-app.

2. docker run -p 3000:3000 my-docker-app
   This command runs a Docker container from the image we built in the previous step (my-docker-app).

Explanation of each part:
docker run: This tells Docker to create and start a new container from a specified image.
-p 3000:3000: The -p flag maps a port on your local machine to a port inside the container.
The format is host_port:container_port.
In this example, 3000:3000 maps port 3000 on your local machine to port 3000 inside the Docker container.
This allows you to access the app running in the container via http://localhost:3000.
my-docker-app: This is the name of the Docker image we built. Docker uses this image to create and start the container.
Summary of the Workflow
Build: docker build -t my-docker-app . takes your application code, dependencies, and instructions (from the Dockerfile) and bundles them into an image tagged as my-docker-app.
Run: docker run -p 3000:3000 my-docker-app creates a new, isolated container from the my-docker-app image, exposing the app on port 3000 of your local machine so you can interact with it as if it were running natively.

---

You can use nodemon in your Docker container to automatically restart your application when files change, which is particularly useful during development. Here’s how you can set it up along with some methods to view logs from your Docker container.

Using Nodemon in Your Docker Container
Install Nodemon: First, ensure you have nodemon as a development dependency in your project. You can install it by running:

npm install --save-dev nodemon

Update your Dockerfile: Modify your Dockerfile to use nodemon instead of node. Replace the last line in your Dockerfile from:

`CMD ["node", "app.js"]`

to:

`CMD ["npx", "nodemon", "app.js"]`

This way, your application will be run with nodemon inside the container.

Update your Dockerfile for Development: To make sure that nodemon works correctly, you should also consider adding a volume to your docker run command to map your local directory to the container's working directory. This allows nodemon to watch your local files for changes:

`docker run -p 4000:4000 -v $(pwd):/app_jedy jedy_app`

The -v $(pwd):/app_jedy option mounts your current directory into the /app_jedy directory in the container. This way, changes made to your files will be reflected inside the container.

Viewing Logs in Your Container
When you run your Docker container, the logs from nodemon and your Express app will be output to the console.

Here are a couple of methods to view the logs:

Directly in Terminal: If you start your container in the terminal (using docker run), you can see the logs directly in the terminal window where you ran the command.

Using docker logs Command: If your container is running in detached mode (using the -d flag), you can view the logs of a specific container using:

`docker logs <container_id>`

To find your container ID, you can use:

`docker ps`

This will list all running containers, along with their IDs. Replace <container_id> with the actual ID of your container.

Using Docker Compose: If your application grows and you decide to use Docker Compose, you can define a docker-compose.yml file to manage your application. The logs can be viewed by running:

`docker-compose logs`

## Summary

Install nodemon and modify your Dockerfile to run your app with nodemon.
Use volume mapping to ensure nodemon can detect changes in your code.

View logs directly in the terminal or use the docker logs command for detached containers.
By following these steps, you'll be able to see real-time logs and automatically restart your application during development.

---

1. Container Name
   By default, Docker will assign a random name to your container if you don’t specify one. You can choose a custom name here, like my_jedy_app_container, to make it easier to identify and manage.
   Example: If you name your container my_jedy_app_container, you’ll be able to use commands like docker logs my_jedy_app_container or docker stop my_jedy_app_container to interact with it by name instead of using the container ID.
2. Ports
   This setting is for port mapping, which connects a port on your machine (the “host”) to a port on the container.
   Since your app listens on port 4000 inside the container (as defined by EXPOSE 4000 in your Dockerfile), you need to map that to a port on your host. For example:
   Host Port: 4000 (your machine’s port)
   Container Port: 4000 (the app’s port inside the container)
   Example: By setting this mapping, you can access the app in your browser at http://localhost:4000.
3. Volumes
   Volumes allow you to share files between your host machine and the container. This can be very useful for development if you want changes in your code on your machine to be immediately reflected in the container.
   You can specify a folder on your host (e.g., your project directory) and map it to a folder inside the container (e.g., /app_jedy).
   Example: To map your project folder:
   Host Path: Path to your local project directory (e.g., /path/to/your/project)
   Container Path: /app_jedy
   Benefit: With this setup, any code changes you make in the local directory will update inside the container without needing to rebuild the image each time.
4. Environment Variables
   This setting lets you define environment variables for the container, often used to store sensitive information like API keys or configuration settings.
   For example, if you’re using a .env file locally for settings like PORT=4000, you could set those directly in Docker as environment variables.
   Example:
   Key: PORT
   Value: 4000

   This approach allows your app to access environment-specific settings within the container.
   How to Use These Settings with Your Project
   Name: Give it a custom name like my_jedy_app.
   Ports: Map 4000 on your host to 4000 in the container.
   Volumes: Map your local project directory to /app_jedy for live code updates.
   Environment Variables: Add any required environment variables, such as PORT, if not already handled in your code.
   Once configured, click Run to start the container with these custom settings. You can then access your app at http://localhost:4000 and manage the container using its custom name.

---

Solution : Update Your Docker Compose for Development
If you're using Docker Compose for development, you can configure it to handle volumes like this:

```
version: '3'
services:
  app:
    image: jedy_app
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "4000:4000"
    volumes:
      - .:/app_jedy
      - /app_jedy/node_modules
```

Explanation of Benefits
With this setup:

Code changes on your host machine will update in real-time inside the container.
Dependencies will remain installed inside the container and won’t be overwritten by the host directory.
This allows you to avoid the MODULE_NOT_FOUND errors caused by the absence of node_modules in the host directory.
