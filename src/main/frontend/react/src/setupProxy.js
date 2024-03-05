const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'http://52.79.230.93:8080',
  //     changeOrigin: true,
  //   })
  // );

  app.use(
    '/file',
    createProxyMiddleware({
      target: 'https://likms.assembly.go.kr/filegate/servlet',
      changeOrigin: true,
      pathRewrite: {
        '^/file/https://likms.assembly.go.kr/filegate/servlet': '', // Remove the /pdfurl prefix when forwarding the request
      },
      secure: false, // Disable SSL verification (use with caution in production)
    })
  );

  app.use(
    '/elastic',
    createProxyMiddleware({
      target: 'https://gemini.es.ap-northeast-2.aws.elastic-cloud.com/elastic/pdf_documents/_search',
      changeOrigin: true,
      pathRewrite: {
        '^/elastic': '',
      },
      secure: false, // Disable SSL verification (use with caution in production)
    })
  );
};
