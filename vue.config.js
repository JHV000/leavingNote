// 引用 npm ip包，用来获取本地ip等操作，文档地址：https://www.npmjs.com/package/ip
const ip = require('ip')
// 引用path包(path属于node自带包，无需在package.json中引用安装即可直接引用)，用来操作路径，文档地址：https://nodejs.org/docs/latest/api/path.html
const path = require('path')
// 引用 npm html-webpack-inline-plugin包，用来将html中inline标识的<script>,<link>,<img>标签的元素内容压缩进html中
// const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin')
// 引用 npm filemanager-webpack-plugin包，用来操作文件，允许复制，归档成 (.zip/.tar/.tar.gz)，移动，删除文件和目录在构建前或者构建前， 文档地址：https://www.npmjs.com/package/filemanager-webpack-plugin
// const FileManagerPlugin = require('filemanager-webpack-plugin')
// 判断时候是生产环境
const isProd = process.env.NODE_ENV === 'production'
// 定义一些公用参数，以供项目中使用
const pluginOptions = {
  // 项目名，定义成我们在云平台申请的应用名，类似 ***.vivo.com.cn
  projectName: 'sdmap',
  // 本地ip
  host: ip.address(),
  // 定义端口
  port: 8081,
}

// vue.config.js导出的配置项
module.exports = {
  pluginOptions,
  // 测试服务启动时显示的ip,端口,代理配置
  devServer: {
    open: true,
    host: 'localhost',
    port: 8082,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
        '/': {
            target: 'http://localhost:8080/leaving_war_exploded/',//这里后台的地址模拟的;应该填写你们真实的后台接口
            changOrigin: true,//允许跨域
            pathRewrite: {
                '^/': ''
            }
        }
        
    }
  },

  publicPath: isProd
    ? './' : '/',
  lintOnSave: true,
  // 是否生成sourcemap文件，生成环境不生成以加速生产环境构建
  productionSourceMap: !isProd,
  // 静态资源文件的目录
  assetsDir: 'static',
  // css是否开启sourcemap,生成环境不生成
  css: {
    sourceMap: !isProd
  },



}