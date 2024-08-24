const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/v1/public',
        createProxyMiddleware({
            target: 'https://gateway.marvel.com',
            changeOrigin: true,
        })
    );
};
