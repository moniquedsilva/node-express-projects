const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello, World!');
});

app.get('/oi', function (req, res) {
  res.send('Olá, mundo!');
});

const lista = ['Mulher Maravilha', 'Capitã Marvel', 'Homem de Ferro'];

app.get('/herois', function (req, res) {
  res.send(lista);
});

app.listen(3000);
