/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'salty-savannah-84149.herokuapp.com',
        pathname: '/uploads/**',
      },
    ],
  },
}


module.exports = nextConfig






