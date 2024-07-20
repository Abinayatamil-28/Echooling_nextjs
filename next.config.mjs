/** @type {import('next').NextConfig} */
const nextConfig = {};


export default {
    images: {
      domains: ['reactheme.com'],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'reactheme.com',
          port: '',
          pathname: '/products/html/echooling/assets/images/**',
        },
      ],
    },
  };
  