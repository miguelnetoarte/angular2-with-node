const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const api = require('./server/routes/api');
const watson = require('./server/ibm/watson/conversation/watson');

const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', api);
app.use('/watson', watson);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("Servidor iniciado " + appEnv.url);
});
