const express = require('express')
const bodyParser = require('body-parser')
var app = express()
var router = require('./routes')

// 配置模板引擎和 body-parser 一定要在 app.use(router)挂载路由之前
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(router)

app.listen(8888, () => {
  console.log('服务器已启动....')
})