const ApiError = require('../exceptions/api.error');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function (err, req, res, next) {
   // Logging error in console:
   console.log('@@@@ ERROR:::', err);

   if (err instanceof ApiError) {
      return res.status(err.status).json({ message: err.message, errors: err.errors });
   }

   return res.status(500).json({ message: 'Unrecognized error -_-' });
};
