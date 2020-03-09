// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "This is a mini-program.",
    array: [{first:1},{second:2}],
    num: 0,
    object: {
      text: 'init data'
    },
    a:1, b:2, c:3,
    arr: [{
      message: '苹果',
    }, {
      message: '香蕉'
    },
    {
      message:'桃子'
    }],
    item: {
      a: "first",
      b: "第一",
      c:"2020-3-8"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载完成")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.route)
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
    console.log("正在下拉")

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("拉到底部啦")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 用户查找页面不存在时
   */
  onPageNotFound(res) {
    wx.switchTab({
      url: 'pages/index1/index1'
    }) 
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  viewTap: function () {
    console.log('点击成功')
  },
  changeText: function () {
    this.setData({
      text: 'This is not a mini-program'
    })
  },
  changeNum: function () {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    this.setData({
      'array[0].first': 3
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  }
})