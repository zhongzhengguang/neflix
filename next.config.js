/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    // 導入網址圖片用
  },
};

module.exports = nextConfig;
