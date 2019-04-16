const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './component/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader?limit=8192',
        options: {name: '/images/[name].[ext]',},}
    ],
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'component/index.html'
    })
  ]
};
