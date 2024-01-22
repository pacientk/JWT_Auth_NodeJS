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
      password: '$2b$04$mYEYAjkQhxTuPycVm.hiw.slfehVedsiOHssK.SIfXslBJfUp5SHi',
      isActivated: 'true',
      activationLink: 'e027ceef-a96d-4885-b6c8-bc0eb9a80b75',
   },
   {
      email: 'wwwww@asd.asd',
      password: '$2b$04$mYEYAjkQhxTuPycVm.hiw.slfehVedsiOHssK.SIfXslBJfUp5SHi',
      isActivated: 'true',
      activationLink: 'e027ceef-a96d-4885-b6c8-bc0eb9a80b75',
   },
   {
      email: 'eeeee@asd.asd',
      password: '$2b$04$mYEYAjkQhxTuPycVm.hiw.slfehVedsiOHssK.SIfXslBJfUp5SHi',
      isActivated: 'true',
      activationLink: 'e027ceef-a96d-4885-b6c8-bc0eb9a80b75',
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
