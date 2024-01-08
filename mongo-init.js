// mongo-init.js
db.auth('root', 'rootpass');

db = db.getSiblingDB('service_db');

db.createUser({
   user: 'root',
   pwd: 'rootpass',
   roles: [
      {
         role: 'readWrite',
         db: 'service_db',
      },
   ],
});

// Создаем коллекцию users
db.createCollection('users');

db.users.insertMany([
   {
      email: 'asd1@asd.asd',
      password: '123123',
      isActivated: 'true',
      activationLink: '00000',
   },
   {
      email: 'asd2@asd.asd',
      password: '123123',
      isActivated: 'true',
      activationLink: '00000',
   },
   {
      email: 'asd3@asd.asd',
      password: '123123',
      isActivated: 'true',
      activationLink: '00000',
   },
]);

// Создаем коллекцию tokens
db.createCollection('tokens');

// Добавляем документы в коллекцию tokens
db.tokens.insertMany([
   {
      user: db.users.findOne({ email: 'asd1@asd.asd' })._id,
      refreshToken: 'refresh-token-1',
   },
   {
      user: db.users.findOne({ email: 'asd2@asd.asd' })._id,
      refreshToken: 'refresh-token-2',
   },
]);