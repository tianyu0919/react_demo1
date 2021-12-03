// * 代理
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // ...You can now register proxies as you wish!
  app.use('/api',
    createProxyMiddleware({
      target: 'http://localhost:9000/api',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      },
    })
  );
  // app.use(proxy('/apc', {
  //   target: 'http://172.19.5.34:9531',
  //   secure: false,
  //   changeOrigin: true,
  //   pathRewrite: {
  //     "^/apc": "/"
  //   },
  // }));
  //app.use(proxy('/apc', { target: 'http://172.19.5.34:9531' }));
};