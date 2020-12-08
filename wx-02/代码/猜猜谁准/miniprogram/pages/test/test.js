// pages/test/test.js
/* webSocket 连接地址 */
const url='ws://192.168.124.31:8182'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    /* connectSocket() 连接后端webSocket 服务  */
    wx.connectSocket({
      url,
    })
    
    /* onSocketOpen()   与后端webSocket 服务连接成功 */
    wx.onSocketOpen((result) => {
      console.log('open');
      /* sendSocketMessage() 向后端webSocket  发送信息 */
      wx.sendSocketMessage({
        data: Math.random().toString(),
      })

      /* onSocketMessage()  接收到后端webSocket 信息事件 */
      wx.onSocketMessage(({data}) => {
        const {list}=this.data;
        this.setData({
          list:[...list,data]
        })
      })

    })

    
    
    
  }
})