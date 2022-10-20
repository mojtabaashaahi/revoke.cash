const withPreact = require('next-plugin-preact');
const withPWA = require('next-pwa')({ dest: 'public', disable: process.env.NODE_ENV === 'development' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/privacy-policy',
        destination: '/privacy-policy.html',
      },
    ];
  },
};

module.exports = withPWA(withPreact(nextConfig));
