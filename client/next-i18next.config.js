// const { LOCALES_LIST } = require('./src/utils/constants');

module.exports = {
   i18n: {
      defaultLocale: 'en',
      locales: ['en', 'he', 'ru'],
   },
   reloadOnPrerender: process.env.NODE_ENV === 'development',
};
