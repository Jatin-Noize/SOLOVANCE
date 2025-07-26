/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
