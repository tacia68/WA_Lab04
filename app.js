
/* eslint-env node */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindos ao WebAcademy!!');
});

app.listen(8083, () => {
  console.log('Rodando na porta 8083');
});
