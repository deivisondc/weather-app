const path = require("path");

const vueSrc = "./src";

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        "@": path.join(__dirname, vueSrc)
      }
    }
  }
}