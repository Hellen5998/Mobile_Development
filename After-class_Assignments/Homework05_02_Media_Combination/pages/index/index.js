//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open:"单击播放",
    items: [
      {
        data: "/images/picture.gif",
        type: "image"
      },
      {
        data: "此时类型为text",
        type: "text"
      },
      {
        data: "http://www.w3school.com.cn//i/movie.mp4",
        type: "video"
      },
      {
        data: "/music/music.mp3", //使用绝对路径
        type: "audio"
      }
    ]
  },
  musicPlayer: null,
  musicPlayerPause: false,
  audioPlay: function (e) {
    console.log(e)
    console.log(this.musicPlayer.src)
    if (this.musicPlayer.src != e.target.dataset.scr) {
      this.musicPlayer.src = e.target.dataset.scr
      this.musicPlayer.play()
      wx.showToast({
        title: '音乐播放',
        icon: 'none',
        duration: 1000
      })
      this.setData({
        open: "单击暂停"
      })
    } else {
      if (this.musicPlayerPause) {
        this.musicPlayerPause = false;
        this.musicPlayer.play()
        wx.showToast({
          title: '音乐继续',
          icon: 'none',
          duration: 1000
        })
        this.setData({
          open: "单击暂停"
        })
      } else {
        this.musicPlayer.pause()
        this.setData({
          open: "单击播放"
        })
      }
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.musicPlayer = wx.createInnerAudioContext();
    this.musicPlayer.onPause(() => {
      this.musicPlayerPause = true;
      wx.showToast({
        title: '音乐暂停',
        icon: 'none',
        duration: 1000
      })
    });
    this.musicPlayer.onStop(() => {
      this.musicPlayerPause = false;
      wx.showToasnonet({
        title: '音乐结束',
        icon: 'none',
        duration: 1000
      })
    });
  },

change: function () {
  this.setData({
    items: [
      {
        data: "/images/picture1.gif",
        type: "image"
      },
      {
        data: "text新内容",
        type: "text"
      },
      {
        data: "http://www.w3school.com.cn//i/movie.mp4",
        type: "video"
      },
      {
        data: "/music/music.mp3", 
        type: "audio"
      }
    ]
  })
  }
})