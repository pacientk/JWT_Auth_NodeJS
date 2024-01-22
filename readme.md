Take a look [Origin source of project](https://dev.to/francescoxx/javascript-fullstack-web-app-nextjs-docker-4d44)

#### Build the backend image
`docker compose build` 

#### Start the backend container
`docker compose up -d server`

---

#### Compose with .env 
Параметр `env_file: ./server/.env` предназначен для определения переменных окружения внутри запущенного контейнера, а НЕ для инициализации самого контейнера.
Он не будет использоваться для подстановки переменных в файле docker-compose.yaml. Т.е. через env_file он работать не будет.
Чтобы использовать переменные окружения для запускаемого контейнере надо выполнить следующую команду:

`docker compose --env-file ./server/.env  up -d`

