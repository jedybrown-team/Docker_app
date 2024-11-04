## Build the Docker image

`docker build -t jedy_app .`

## Run the Docker container: maps the container’s port 4000 to the machine’s port 4000

`docker run -p 4000:4000 jedy_app`

## Get the Container ID or Name

`docker ps`

## View container logs

`docker logs <container_id_or_name>`

## View logs | Follow Logs in Real Time

`docker logs -f <container_id_or_name>`

## view specific number of lines

`docker logs --tail 20 <container_id_or_name>`

## stop a container by ID or Name

`docker stop my_jedy_app_container`

## List all images

`docker images`

## run docker container based on an image in terminal

` docker run --name my_jedy_app_container jedy_app`
