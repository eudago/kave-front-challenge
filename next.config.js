/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.kavehome.com',
          port: '',
          pathname: '/media/catalog/product/**',
        },
      ],
    },
  },
}

module.exports = nextConfig
