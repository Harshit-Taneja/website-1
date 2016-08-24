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
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }

}
