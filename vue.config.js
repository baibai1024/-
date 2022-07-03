const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: false,
      port: 8080,
      host: 'localhost'
    }
  }
})
