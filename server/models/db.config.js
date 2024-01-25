const {
   MONGODB_HOST,
   MONGODB_USER,
   MONGODB_PASSWORD,
   MONGODB_DATABASE,
   MONGODB_PORT,
   DOCKER_CONTAINER,
} = process.env;

const dbHost = DOCKER_CONTAINER === 'true' ? 'mongodb' : MONGODB_HOST;

module.exports = {
   db_url: `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${dbHost}:${MONGODB_PORT}/${MONGODB_DATABASE}`,
};
