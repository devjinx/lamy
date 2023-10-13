// vue.config.js
const { createProxyMiddleware } = require('http-proxy-middleware');

// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/v0': {
        target: 'https://nswb-dev.lamy.pw',
        changeOrigin: true,
        pathRewrite: {
          '^/v0': '',
        },
      },
    },
  },
};