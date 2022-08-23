const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch'); //prefetch 삭제
  }
}

/**proxy(프록시) 설정 */
const target = 'http:127.0.0.1:3000';

module.exports = {
  devServer: {
    port: 8080,
    proxy:{
      //proxy요청을 보낼 API 시작 부분
      '^/api':{
        target,
        changeOrigin: true
      }
    }
  }
}