const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV } = process.env;

const config = {
  entry: [
    path.join(process.cwd(), 'app/index.jsx'),
  ],
  output: {
    path: path.join(process.cwd(), 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        include: [path.resolve(process.cwd(), 'app'), path.resolve(process.cwd(), 'config')],
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['url-loader?limit=100000'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        BACKEND_URL: JSON.stringify(process.env.BACKEND_URL),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(process.cwd(), 'app/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV || 'development'),
      },
    }),
  ],
  resolve: {
    alias: {
      app: path.resolve(process.cwd(), 'app/'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },
  target: 'web',
  performance: {
    hints: false,
  },
};

if (NODE_ENV === 'production') {
  config.performance = {
    assetFilter: assetFilename => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  };
} else {
  config.devtool = 'cheap-module-eval-source-map';
  config.entry = config.entry.concat([
    'webpack-hot-middleware/client?reload=true',
  ]);
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]);
}

module.exports = config;
