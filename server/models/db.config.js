const { MONGODB_HOST, MONGODB_USER, MONGODB_PASSWORD, MONGODB_DATABASE, MONGODB_PORT } =
   process.env;

module.exports = {
   db_url: `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`,
};
