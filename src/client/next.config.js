/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["scontent.fmnl30-2.fna.fbcdn.net"],
  },
  experimental: {
    runtime: "nodejs",
    serverComponents: true,
  },
};

module.exports = nextConfig;
