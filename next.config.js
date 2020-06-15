require('dotenv').config();
const config = {
  publicRuntimeConfig: {
    seoNoIndex: process.env.SEO_NOINDEX || true,
  },
};

module.exports = config;
