const express = require('express');
const app = express();

const escola = require('./escola'); // Importe a função do arquivo escola.js

app.get('/', (req, res) => {
    const temAula = escola.hojeTemAula(); // Use a função para verificar se há aula hoje
    res.json({ temAula: temAula });
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});