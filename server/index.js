require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error.middleware');

const app = new express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(
   cors({
      credentials: true,
      origin: process.env.CLIENT_URL,
   }),
);
app.use('/api', router);
app.use(errorMiddleware); // ❗️ Middleware для обработки ошибок ВСЕГДА должен подключаться последним

const start = async () => {
   try {
      await mongoose
         .connect(process.env.DB_URL)
         .then(() => {
            console.log('@@@@ Successfully connected to MongoDB');
         })
         .catch((error) => {
            console.error('@@@@ Error connecting to MongoDB:', error);
         });
      app.listen(PORT, () => console.log(`@@@@ Server started on ${PORT} port`));
   } catch (e) {
      console.error(e);
   }
};

start();
