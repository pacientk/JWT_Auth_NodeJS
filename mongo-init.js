print('========START========');
db = db.getSiblingDB('service_db');

db.createUser({
   user: 'serviceXUser',
   pwd: 'XmgYFQx4RIKQ',
   roles: [{ role: 'readWrite', db: 'service_db' }],
});

// Создаем коллекции
db.createCollection('users');
db.createCollection('tokens');

db.users.insertMany([
   {
      email: 'qqqq@asd.asd',
      password: '123123',
      isActivated: 'true',
      activationLink: '00000',
   },
   {
      email: 'wwwww@asd.asd',
      password: '123123',
      isActivated: 'true',
      activationLink: '00000',
   },
   {
      email: 'eeeee@asd.asd',
      password: '123123',
      isActivated: 'true',
      activationLink: '00000',
   },
]);

// Добавляем документы в коллекцию tokens
db.tokens.insertMany([
   {
      user: db.users.findOne({ email: 'qqqq@asd.asd' })._id,
      refreshToken: 'refresh-token-1',
   },
   {
      user: db.users.findOne({ email: 'wwwww@asd.asd' })._id,
      refreshToken: 'refresh-token-2',
   },
]);
print('========END========');
