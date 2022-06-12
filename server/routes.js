const express = require('express')
const fs = require('fs')
var router = express.Router()

// 根据经纬度获取位置详情
router.get('/positions',(req, res) => {
  const latitude = req.query.latitude
  const longitude = req.query.longitude
  fs.readFile('./data/shop.json','utf-8',(err, data) => {
    if(err) return console.error(err)
    var positions = JSON.parse(data.toString()).positions
    for(const obj of positions) {
      if(obj.data.latitude === latitude && obj.data.longitude === longitude){
        return res.send(obj)
      }
    }
    res.send('暂未找到该经纬度所对应的地址')
  })
})

// 获取食品分类列表
router.get('/categorys',(req, res) => {
  fs.readFile('./data/shop.json','utf-8',(err, data) => {
    if(err) return console.error(err)
    var categorys = JSON.parse(data.toString()).categorys
    return res.send({code:0,categorys})
  })
})

// 根据经纬度获取商铺列表
router.get('/shops',(req, res) => {
  const latitude = req.query.latitude
  const longitude = req.query.longitude
  fs.readFile('./data/shop.json','utf-8',(err, data) => {
    if(err) return console.error(err)
    var shops = JSON.parse(data.toString()).shops
    return res.send({code:0,shops})
  })
})


module.exports = router
