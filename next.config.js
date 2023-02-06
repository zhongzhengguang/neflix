const withTM = require("next-transpile-modules")([
  "@stripe/firestore-stripe-payments",
]);

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["image.tmdb.org"],
//     // 導入網址圖片用
//   },
// };

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "rb.gy"],
    // 導入網址圖片用
  },
});
