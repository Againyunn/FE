const target = 'http://127.0.0.1:3000';

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
}
module.exports = {
    devServer:{
        port: 8080,
        proxy:{
            '^/api':{
                target,
                changeOrigin: true
            },
            '^/upload':{
                target,
                changeOrigin: true
            },
            '^/download':{
                target,
                changeOrigin: true
            }
        }
        
    }
}
