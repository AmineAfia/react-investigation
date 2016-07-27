var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { exclude: /node_modules/,
        loader: 'babel',
        query: {
        presets: ['react', 'es2015', 'stage-1']
        }
       },
       {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!toolbox')
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin('bundle.css', {
        })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
