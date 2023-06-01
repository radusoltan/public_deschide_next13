/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['api.deschide.local'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'api.deschide.local/',
    //   },
    // ],
  },
}

module.exports = nextConfig
