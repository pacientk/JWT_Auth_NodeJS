const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone', // in case you need to generate static html use 'export' otherwise 'standalone'
   i18n,
};

// *** For creating a static build, you can use the following configuration: ***
// Then in terminal:
// $ yarn build
// $ yarn serve -s out

// const nextConfig = {
//    output: 'export', // in case you need to generate static html use 'export' otherwise 'standalone'
//    images: { unoptimized: true }, // for static build generation or remove this line
// };

module.exports = nextConfig;
