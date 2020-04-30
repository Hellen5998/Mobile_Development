// pages/path/path.js
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
  //wx.showToast测试
  toast(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })    
  },
  modal(){
    //测试wx.showLoading wx.hideLoading
    wx.showLoading({
      title: '正在加载别着急哦',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)    
    //测试wx.showModal
    wx.showModal({
      title: '提示',
      content: '你想要继续浏览吗？',
      confirmColor:"#9400ff",
      confirmText:"继续",
      cancelText:"取消",
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })    
  },
  //测试wx.showActionSheet
  ActionSheet(){
    wx.showActionSheet({
      itemList: ['Python', 'C', 'C++'],
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })    
  },
  changenavtext:function(){
    wx.setNavigationBarTitle({
      title: '已改变'
    })
  },
  resetnav:function(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff9400',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })    
  }
})