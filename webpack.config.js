var webpack = require("webpack");

module.exports = {
  entry: {
    "app": "./app/main.js"
  },
  output: {
    path: __dirname,
    filename: "./bundle/bundle.js"
  },
  watch: true

}
