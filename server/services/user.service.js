const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail.service');
const tokenService = require('../services/token.service');
const UserDto = require('../dto/user.dto');
const ApiError = require('../exceptions/api.error');

class UserService {
   async registration(email, password) {
      const candidate = await UserModel.findOne({ email });

      if (candidate) {
         throw ApiError.BadRequest(`A user with the email address ${email} already exists.`);
      }

      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = uuid.v4();

      const user = await UserModel.create({ email, password: hashPassword, activationLink });
      await mailService.sendActivationMail(
         email,
         `${process.env.API_URL}/api/activate/${activationLink}`,
      );

      const userDto = new UserDto(user); // id, email, isActivated
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
   }

   async activate(activationLink) {
      const user = await UserModel.findOne({ activationLink });

      if (!user) {
         throw ApiError.BadRequest('The activation link is incorrect!');
      }

      user.isActivated = true;
      await user.save();
   }

   async login(email, password) {
      const user = await UserModel.findOne({ email });

      if (!user) {
         throw ApiError.BadRequest('A user with this email address was not found.');
      }

      const isPassEquals = await bcrypt.compare(password, user.password);

      if (!isPassEquals) {
         throw ApiError.BadRequest('The password is wrong.');
      }

      const userDto = new UserDto(user); // id, email, isActivated
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
   }

   async logout(refreshToken) {
      const token = await tokenService.removeToken(refreshToken);
      return token;
   }
}

module.exports = new UserService();
