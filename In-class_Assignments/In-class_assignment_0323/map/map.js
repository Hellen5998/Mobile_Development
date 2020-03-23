// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  location:function(){
    wx.getLocation({
      type: 'gcj02', 
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  testButtonClick1: function () {
    wx.getLocation({
      type: 'wgs84',

      //成功
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        console.log('latitude' + latitude)
        console.log('longitude' + longitude)
        console.log('speed' + speed)
        console.log('accuracy：' + accuracy)
      },

      //失败回调
      fail: function (err) {
        console.log("getLocation fail:" + err)
      },

      //结束回调
      complete: function (err) {
        console.log("getLocation complete:" + err)
      }
    })
  },

  // 打开地图选择位置
  testButtonClick2: function () {

    wx.chooseLocation({
      //成功
      success: function (res) {
        var name = res.name
        var address = res.address
        var latitude = res.latitude
        var longitude = res.longitude

        console.log('name' + name)
        console.log('address' + address)
        console.log('latitude' + latitude)
        console.log('longitude' + longitude)
      },
      //取消
      cancel: function (err) {
        console.log("chooseLocation cancel:" + err)
      },
      //失败回调
      fail: function (err) {
        console.log("chooseLocation fail:" + err)
      },

      //结束回调
      complete: function (err) {
        console.log("chooseLocation complete:" + err)
      }
    })
  },

  // 使用微信内置地图查看位置 
  testButtonClick3: function () {

    //获取当前位置
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var name = res.name
        var address = res.address

        //使用微信内置地图查看位置 
        wx.openLocation({
          latitude: latitude,//维度
          longitude: longitude,//经度
          scale: 28,//缩放比例
          name: name,//位置名称
          address: address,//位置地址
          //成功
          success: function (res) {
            console.log("openLocation cancel:" + err)
          },
          //失败回调
          fail: function (err) {
            console.log("openLocation fail:" + err)
          },

          //结束回调
          complete: function (err) {
            console.log("openLocation complete:" + err)
          }
        })
      }
    })
  }
})