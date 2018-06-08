const express = require('express');
const path = require('path');
const createDebug = require('debug');
const middlewar = require('./middleware/webpack');

const log = createDebug('trust-webapp:server:log');
const port = process.env.PORT || 8080;
const app = express();

middlewar(app, {
  outputPath: path.resolve(process.cwd(), 'public'),
  publicPath: '/',
});

app.listen(port, () => {
  log(`Running at http://0.0.0.0:${port}`);
});
