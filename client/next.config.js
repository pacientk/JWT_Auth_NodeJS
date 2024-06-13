/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export', // in case you need to generate static html use 'export' otherwise 'standalone'
   images: { unoptimized: true }, // for static build generation or remove this line
};

module.exports = nextConfig;
