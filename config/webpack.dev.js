var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

module.exports = function (options){
    return {
    	context: path.join(__dirname, "../src"),
    	cache:true,
    	devtool: 'source-map',
        entry: {
        	app: "./index",
        	//vendor: ["jquery"]
    	},
    	externals: {
            // require("jquery") is external and available
            //  on the global var jQuery
            'jquery': 'jQuery',
            'react':'window.React',
            'react-dom':'window.ReactDOM'
        },
        output: {
            path: path.join(__dirname, "../dev"),
            publicPath:"/",
            filename: "js/[name].[hash].js"
        },
        module: {
            rules: [
                {
                  test: /\.js$/,
                  exclude: /(node_modules)/,
                  //loader: 'babel-loader',
                  use: [
                      "babel-loader",
                      "eslint-loader",// eslint检查
                    ],
                  //options: { // 可以配置在.babelrc文件中
                  //  presets: ['es2015','react']
                  //}
                },
                { test: /\.css$/, use: ["style-loader", "css-loader"]},
                { test: /\.scss$/, 
                  use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"],
                    publicPath: "/"
                  })
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: ['file-loader?name=image/[hash].[ext]?']
                }
            ]
        },
        plugins: [
        	// 根据模版生成html
            new HtmlWebpackPlugin({
                title: 'Music',
                template: './index.temp.html',
            }),
            new ExtractTextPlugin({
                filename: "css/style.[hash].css",
                disable: false,
                allChunks: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
              names: ["common"]
            }),
            // 打开浏览器
      		new OpenBrowserPlugin({ url: 'http://localhost:9999' }),
            /*
            * Plugin: CopyWebpackPlugin 拷贝文件
            * Description: Copy files and directories in webpack.
            *
            * Copies project static assets.
            *
            * See: https://www.npmjs.com/package/copy-webpack-plugin
            */
            new CopyWebpackPlugin([
                { from: 'json', to: 'json' },
                { from: 'images/favicon.ico', to: 'image/favicon.ico' }
            ])
        ],
        devServer: {
            contentBase: "./src",//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true,//实时刷新
            host: '0.0.0.0',
            port:9999,
            // 设置代理
            proxy:{
                "/kugou": {
                    target: "http://m.kugou.com",
                    changeOrigin: true,
                    pathRewrite: {"^/kugou" : ""}
                },
                "/ad": {
                    target: "http://ads.service.kugou.com",
                    changeOrigin: true,
                    pathRewrite: {"^/ad" : ""}
                },
                "/mobilecdn": {
                    target: "http://mobilecdn.kugou.com",
                    changeOrigin: true,
                    pathRewrite: {"^/mobilecdn" : ""}
                },
            }
        }
    }
};