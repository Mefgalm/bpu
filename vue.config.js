const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/bpu/',
  pages: {
    index: {
      entry: "src/main.js",
      title: "Blueprint Upgrade"
    }
  }
})
