const ContactUsFormModel = require('../models/contactusForm.model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail.service');
const tokenService = require('../services/token.service');
const UserDto = require('../dto/user.dto');
const ApiError = require('../exceptions/api.error');

class ContactUsFormService {
   async addNewMessage(firstName, lastName, email, phone, category, customerId, message) {
      const formData = await ContactUsFormModel.create({
         firstName,
         lastName,
         email,
         phone,
         category,
         customerId,
         message,
      });

      return formData;
   }
}

module.exports = new ContactUsFormService();
