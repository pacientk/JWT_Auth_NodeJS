const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone', // in case you need to generate static html use 'export' otherwise 'standalone'
   // images: { unoptimized: true }, // for static build generation or remove this line
   i18n,
};

module.exports = nextConfig;
