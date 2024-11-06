## Build the Docker image

`docker build -t jedy_app .`

## Command to Build Docker image with a Tag

`docker build -t jedy_app:v1 .`

## Run the Docker container: maps the container’s port 4000 to the machine’s port 4000

`docker run -p 4000:4000 jedy_app` run the Docker container with the image tagged as jedy_app
`docker run -p 4000:4000 jedy_app:v1` run with a version tag
`docker run --name my_jedy_app_container -p 4000:4000 jedy_app:v1` give container a specific name
`docker run -p 4000:4000 -e MY_ENV_VAR=value jedy_app:v1` add environmental variables to the running
`docker run -d -p 4000:4000 jedy_app:v1` run the container in detached mode (background)

## Get the Container ID or Name

`docker ps`

## Start a container

`docker start <container_name>`

## View container logs

`docker logs <container_id_or_name>`

## View logs | Follow Logs in Real Time

`docker logs -f <container_id_or_name>`

## view specific number of lines

`docker logs --tail 20 <container_id_or_name>`

## stop a container by ID or Name

`docker stop my_jedy_app_container`

## List all images

`docker images` or `docker image ls`

## Delete an image

`docker image rm jedy_image` or ````docker image rm <image id>`

## Delete a container

`docker container rm jedy_container` or ````docker image rm <container id>`

## Delete image forcefully when a container is running the image

`docker image rm -f jedy_image`

## run docker container based on an image in terminal

` docker run --name my_jedy_app_container jedy_app`

## Free up disk space by removing unused data from your Docker environment

`docker system prune` TYPE Y to say yes if you ar sure to remove - images, containers, and networks
`docker system prune --volumes` TYPE Y to say yes if you ar sure to remove - images, containers, networks and volumes

`docker system prune -a` Removing all unused images, containers, networks, and volumes or `docker system prune -a --volumes`

## Craete container port image with tag but remove container once stopped

`docker run --name school_app_container -p 4000:4000 --rm school_app:v1`

## Craete container port image with tag but remove container once stopped and create a volume and map it

`docker run --name school_app_container -p 4000:4000 --rm -v C:\Users\hp\Downloads\Jedidiah\Docker_app:/app_jedy school_app:v1`

`docker run --name school_app_container -p 4000:4000 --rm -v //c/Users/hp/Downloads/Jedidiah/Docker_app:/app_jedy -v /app_jedy/node_modules school_app:v2` -- anonymous volume

`docker run --name school_app_container -p 4000:4000 --rm -v //c/Users/hp/Downloads/Jedidiah/Docker_app:/app_jedy -v school_app_node_modules:/app_jedy/node_modules school_app:v2` -- named volume

## Craete volume

`docker volume create jedy_volume`

## List volumes

`docker volume ls`

## Inspect a volume

`docker volume inspect jedy_volume`

## Run a Container with a Volume

`docker run -d -v jedy_volume:/app/data my_image`

## Remove a volume

`docker volume rm my_volume`

## Build and run compose file

`docker-compose up --build`

## Build and run passing env file

```
docker build -t my-express-app .
docker run --env-file .env -p 4000:4000 my-express-app
```

## Run a docker compose file

`docker-compose up --build`

## Building an image with a specific Dockerfile

`docker build -f Dockerfile.dev -t school_my-app:dev .`

## Running a container from the development image

`docker run -p 4000:4000 school_my-app:dev`

## To start all the services defined in your compose.yaml file:

`docker compose up`

## To stop and remove the running services - It will not remove images or volumes created for the containers

`docker compose down`

## To stop and remove the running services but delete images and volumes too

`docker compose down --rmi all -v`

## If you want to monitor the output of your running containers and debug issues, you can view the logs with:

`docker compose logs`

## To lists all the services along with their current status:

`docker compose ps`
