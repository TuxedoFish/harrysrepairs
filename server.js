//server.js

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
var sslRedirect = require('heroku-ssl-redirect');

// the __dirname is the current directory from where the script is running
app.use(favicon(__dirname + '/build/favicon.ico'));

// enable ssl redirect
app.use(sslRedirect())

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);