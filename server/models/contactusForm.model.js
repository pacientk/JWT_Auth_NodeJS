const { Schema, model } = require('mongoose');

const ContactUsFormSchema = new Schema({
   firstName: { type: String, require: true },
   lastName: { type: String, require: true },
   email: { type: String, unique: true, require: true },
   phone: { type: String, unique: true, require: true },
   category: { type: String, require: true },
   customerId: { type: String, unique: true, require: false },
   message: { type: String, length: 250, require: false },
});

module.exports = model('ContactUsForm', ContactUsFormSchema);
