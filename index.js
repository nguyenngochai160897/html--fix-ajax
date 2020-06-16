'use strict';

const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.send('<input type="text" class="datepicker">');
});

app.get('/get', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);