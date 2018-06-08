/* eslint-disable global-require */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

const devMiddleware = (app, webpackConfig) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    silent: false,
    stats: 'errors-only',
  });
  const fs = middleware.fileSystem;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};

const prodMiddleware = (app, options) => {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'public');

  app.use(compression());
  app.use(publicPath, express.static(outputPath));
  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
};

module.exports = (app, options) => {
  if (process.env.NODE_ENV === 'production') {
    prodMiddleware(app, options);
  } else {
    const webpackConfig = require('../config/webpack.config');
    devMiddleware(app, webpackConfig);
  }
  return app;
};
