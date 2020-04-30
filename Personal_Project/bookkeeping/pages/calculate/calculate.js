// pages/calculate/calculate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    tihuoWay: '请选择日期',
    goods:[],
    dataset_money: '',//储存详情页中的金额
    dataset_date:'', //储存详情页中的日期
    dataset_method:'', //储存详情页中的方式
    dataset_notes:'', //储存详情页中的备注
    dataset_consume:'', //储存详情页中的分类
    dataset_item:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://120.26.176.215/minipro/response.php',
      data:{

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        var successData = res.data;
        console.log(successData)
        that.setData({
          goods: successData
        })
     }
    })
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
  //打开详情
  showRule: function (e) {
    this.setData({
        isRuleTrue: true
    })
    console.log(e.currentTarget.dataset.item)
    this.setData({
      dataset_item:e.currentTarget.dataset.item
    })
  },
  //关闭详情
  hideRule: function () {
    this.setData({
        isRuleTrue: false
    })
  },
  //下拉
  bindShowMsg() {
    this.setData({
        select:!this.data.select
    })
  },

  mySelect_today(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
        tihuoWay: name,
        select: false
    })
    /**获取数据库今日数据**/
    var that = this;
    wx.request({
      url: 'http://120.26.176.215/minipro/getdate.php',
      data:{

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        var successData = res.data;
        console.log(successData)
        that.setData({
          goods: successData
        })
     }
    })
    },
  mySelect_month(e) {
      var name = e.currentTarget.dataset.name
      this.setData({
          tihuoWay: name,
          select: false
      })
      var that = this;
      /**获取数据库本月数据**/
      wx.request({
        url: 'http://120.26.176.215/minipro/getmonth.php',
        data:{
  
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          var successData = res.data;
          console.log(successData)
          that.setData({
            goods: successData
          })
       }
      })
  },
})