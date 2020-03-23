// pages/video/video.js
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
  inputValue: '',
  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    danmuList: [
      {
        text: '好好听',
        color: '#ff0000',
        time: 1
      },
      {
        text: '太好看啦',
        color: '#ff00ff',
        time: 3
      }],
      videoList:[
        {
          name:"Fast Car",
          src:"C:\Users\dell\Desktop\本地化的响\Claire Homework\Supplementary Videos\Fast car -Tracy Chapman.mp4"
        },
        {
          name: "Friends",
          src: "C:\Users\dell\Desktop\本地化的响\Claire Homework\Supplementary Videos\Friends - Chandler Doesn't Like Dogs.mp4"
        },
        {
          name: "Supporters",
          src: "C:\Users\dell\Desktop\本地化的响\Claire Homework\Supplementary Videos\Donald Trump supporters explain their vote during Manheim rally.mp4"
        }
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
   this.videoContext = wx.createVideoContext('myVideo')
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
  bindVTap() {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindInputBlur:function(e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu:function() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})