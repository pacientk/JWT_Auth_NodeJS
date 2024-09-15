module.exports = class ContactUsFormDto {
   firstName;
   lastName;
   email;
   phone;
   category;
   customerId;
   message;

   constructor(model) {
      this.firstName = model.firstName;
      this.lastName = model.lastName;
      this.email = model.email;
      this.phone = model.phone;
      this.category = model.category;
      this.customerId = model.customerId;
      this.message = model.message;
   }
};
