// 通过mutation间接更新state的多个方法的对象(处理数据之间的逻辑)
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-type'
import axios from 'axios'

export default {
  // 异步获取地址
  async getAddress (context, latiAndlong) {
    // 发送异步ajax请求
    await axios({
      url: 'http://localhost:8081/positions',
      method: 'GET',
      params: {
        latitude: latiAndlong.latitude,
        longitude: latiAndlong.longitude
      }
    }).then(res => {
      if(res.data.code === 0) {
        const address = res.data.data
        context.commit(RECEIVE_ADDRESS, address)
      }
    }).catch(error => {
      console.error(error)
    })
  },

  // 异步获取食品分类列表
  async getCategorys (context) {
    // 发送异步ajax请求
    await axios({
      url: 'http://localhost:8081/categorys',
      method: 'GET',
    }).then(res => {
      if(res.data.code === 0) {
        const categorys = res.data.categorys
        context.commit(RECEIVE_CATEGORYS, categorys)
      }
    }).catch(error => {
      console.error(error)
    })
  },

  // 异步获取商家列表
  async getShops (context,latiAndlong) {
    // 发送异步ajax请求
    await axios({
      url: 'http://localhost:8081/shops',
      method: 'GET',
      params: {
        latitude: latiAndlong.latitude,
        longitude:latiAndlong.longitude
      }
    }).then(res => {
      if(res.data.code === 0) {
        const shops = res.data.shops
        context.commit(RECEIVE_SHOPS,shops)
      }
    }).catch(error => {
      console.error(error)
    })
  }
}