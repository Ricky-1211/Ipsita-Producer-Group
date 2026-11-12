/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false, // Prevents build-time fetch blocking in sandboxed/offline environments
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
