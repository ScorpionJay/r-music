const express = require('express')
const path = require('path')
const port = process.env.PORT || 18080
const app = express()
const proxy = require('http-proxy-middleware')
const compression = require('compression');

app.use(compression()); //use compression 
// serve static assets normally
app.use(express.static(__dirname + '/dist'))

// set proxy
app.use('/kugou', proxy({target: 'http://m.kugou.com', changeOrigin: true,pathRewrite: {"^/kugou" : ""}}))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)

