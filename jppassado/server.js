const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/titulo-musica', async (req, res) => {
    try {
        const response = await fetch('https://zenoplay.zenomedia.com/api/zenofm/nowplaying/2cgy8mzvsy8uv');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
        res.status(500).json({ error: 'Erro ao obter dados da API' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
