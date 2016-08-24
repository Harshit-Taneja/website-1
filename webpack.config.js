var webpack = require("webpack");

module.exports = {
  entry: {
    "app": "./app/main.js",
  },
  output: {
    path: __dirname,
    filename: "app.bundle.js"
  },
  watch: true,
  module: {
        loaders: [
            {
              test: /\.css$/,
              exclude: /node_modules/,
              loader: "style-loader!css-loader"
            },//para los css todo listo
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              loaders: ['raw-loader', 'sass-loader']
            } // sass-loader not scss-loader
        ]

    }

}
