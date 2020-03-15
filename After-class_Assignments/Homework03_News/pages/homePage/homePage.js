// pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tArray:[],//新闻类型数组
    loading: true, //是否显示加载
    ishidden: true,
    curpage:0,//新闻列表坐标
    listpage:0,//列表当前页码
    detaildata:[],//新闻列表
    category:"all",//当前分类
    viewHeight:500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tArray:[
        {
          name:"财经",
          category:"finance",
        },
        {
          name: "政治",
          category: "politics",
        },
        {
          name: "健康",
          category: "health",
        },
        {
          name: "娱乐",
          category: "entertainment",
        },
        {
          name: "国内",
          category: "home",
        },
        {
          name: "国际",
          category: "international",
        }
      ]
    }),
    this.readList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  //初次渲染完成后创建了动画实例，根据屏幕高度设置了新的scroll-view高度
  onReady: function () {
    this.animation=wx.createAnimation({
      duration:2000,
      timingFunction:"ease",
    });
    //读取屏幕高度
    var res = wx.getSystemInfoSync();
    var width=res.screenHeight-40-50;
    //设置scroll-view高度
    this.setData({
      viewHeight:width
    })
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
  typeClick(e) {
    var idx = e.currentTarget.dataset.idx;
    console.log(idx);
    var that = this;
    that.setData({
      curpage: e.target.id
    });
    //初始化页码从0开始
    this.setData({
      listpage: 0
    });
    console.log("curpage=", this.data.curpage);
    console.log("listpage==", this.data.listpage);
    //设置分类
    this.setData({
      category: idx
    });
    //获取新闻
    this.readList()
  },
  //加载更多scroll-view bindscrolltolower事件
  addMoreData(e) {
    //页码加1，继续获取新闻
    var that = this;
    var pageTemp = (this.data.listpage + 1)
    that.setData({
      listpage: pageTemp
    });
    //获取新闻
    this.readList()
  },
  readList(){
    this.setData(
      {
        detaildata:[
          {
            title:"这是一条好新闻",
            comment_count:1,
            publish_time:"2020.3.13",
            has_image:true,
            image_list: [{ url: "../../imges/happy.jpg" }]
          },
          {
            title:"太开心了！",
            comment_count:2,
            publish_time: "2020.3.14",
            has_image: true,
            image_list: [{url:"../../imges/joy.jpg"}]
          },
          {
            title: "今日娱乐走向...",
            comment_count:3,
            publish_time: "2020.3.15",
            has_image: true,
            image_list: [{ url: "../../imges/fun.jpg" }]
          }
        ]
      }
    )
  }
})