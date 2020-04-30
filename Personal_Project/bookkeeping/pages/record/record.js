// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2020-04-27', //添加日期
    money:'', //金额
    method:'支出', //方式
    notes:'', //备注
    consume:[], //消费类别
    radio_items: [
      { name: '收入', value: '收入' },
      { name: '支出', value: '支出', checked: 'true' }
    ], 
    items: [
      { name: '饮食', value: '饮食' },
      { name: '衣服', value: '衣服' },
      { name: '理财', value: '理财' },
      { name: '医疗', value: '医疗' },
      { name: '交通', value: '交通' },
      { name: '其他', value: '其他' },
    ]
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
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      consume: e.detail.value
    })
    console.log(this.data.consume)
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      method: e.detail.value
    })
  },
  bindKeyBlur:function(e){
    console.log(e.detail.value)
    this.setData({
      money:e.detail.value
    })
  },
  notesblur:function(e){
    console.log(e.detail.value)
    this.setData({
      notes:e.detail.value
    })
  },
  submit:function(){
    var that = this;
    //var tomethod = JSON.stringify(that.data.method);
    //var toconsume = JSON.stringify(that.data.consume);
    wx.request({
      url: 'http://120.26.176.215/minipro/keep.php', //仅为示例，并非真实的接口地址
      data: {
        money: that.data.money,
        method: that.data.method,
        notes: that.data.notes,
        date: that.data.date,
        consume: that.data.consume,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        wx.showToast({
          title: '成功记录！', 
          icon: 'success', 
          duration: 1500
        })
      }
    })
  }
})