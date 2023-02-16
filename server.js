const express = require('express');
const request = require('request');
const app = express();

const API_URL = 'https://zenoplay.zenomedia.com/api/zenofm/nowplaying/2cgy8mzvsy8uv';

app.get('/api', (req, res) => {
  request(API_URL, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: 'error', message: 'Erro ao acessar a API' });
    }

    const data = JSON.parse(body);

    const jsonpCallback = req.query.callback;
    if (jsonpCallback) {
      return res.jsonp(data);
    } else {
      return res.json(data);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${3000}`);
});
