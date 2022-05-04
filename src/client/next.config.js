/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["scontent.fcrk1-1.fna.fbcdn.net"],
  },
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
};

module.exports = nextConfig;
