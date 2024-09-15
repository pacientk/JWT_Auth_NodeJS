const userService = require('../services/user.service');
const contactUsFormService = require('../services/contactUsForm.service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api.error');

class ContactUsFormController {
   async addContactUsForm(req, res, next) {
      try {
         const errors = validationResult(req);

         console.log('@@@@ req.body>>>>', req.body);

         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Validation error', errors.array()));
         }

         const { firstName, lastName, email, phone, category, customerId, message } = req.body;
         const contactUsFormData = await contactUsFormService.addNewMessage(
            firstName,
            lastName,
            email,
            phone,
            category,
            customerId,
            message,
         );

         console.log('@@@@ contactUsFormData ====');

         // res.cookie('refreshToken', userData.refreshToken, {
         //    maxAge: 30 * 24 * 60 * 60 * 1000,
         //    httpOnly: true,
         //    // secure: true, // for httpS
         // });

         return res.json(contactUsFormData);
      } catch (e) {
         next(e);
      }
   }
}

module.exports = new ContactUsFormController();
