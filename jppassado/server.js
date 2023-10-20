const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configuração do proxy para a API
app.use('/api', createProxyMiddleware({
    target: 'https://zenoplay.zenomedia.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/api',
    },
}));

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor proxy em execução na porta 3000');
});
