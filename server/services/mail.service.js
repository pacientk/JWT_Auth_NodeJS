const nodemailer = require('nodemailer');

class MailService {
   constructor() {
      this.transporter = new nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: process.env.SMTP_PORT,
         secure: false, // ⚠️ почитать об этом!
         auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
         },
      });
   }

   async sendActivationMail(to, link) {
      await this.transporter.sendMail({
         from: process.env.SMTP_USER,
         to,
         subject: 'Activation of user account on' + process.env.API_URL,
         text: '',
         html: `
            <div>
               <h1>For acticvation click on the link below</h1>
               <a href='${link}'>${link}</a>
            </div>
         `,
      });
   }
}

module.exports = new MailService();
