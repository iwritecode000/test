/** @type {import('next').NextConfig} */
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

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost:',
//         port: '1337',
//         pathname: '/uploads/**',
//       },
//     ],
//   },
// }

module.exports = nextConfig