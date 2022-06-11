const express = require('express')
const fs = require('fs')
var router = express.Router()

router.get('/position',(req, res) => {
  fs.readFile('./data/shop.json','utf-8',(err, data) => {
    if(err) console.error(err)
    var position = JSON.parse(data.toString()).positions
    res.send(position)
  })
})


module.exports = router
