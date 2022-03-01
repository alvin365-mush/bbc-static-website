module.exports = {
  /*reactStrictMode: true,*/
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
const optimizedImages = require("next-optimized-images");
module.exports = optimizedImages();
