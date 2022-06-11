const fs = require('fs')
const express = require('express')
var app = express()
var router = require('./routes')

app.use(router)

app.listen(8888, () => {
  console.log('服务器已启动....')
})