// pages/video/video.js

// 总接口
let ApiUrl = "http://localhost:8888"
// 视频类型接口
let tyepUrl = ApiUrl + "/demo/video/type"
// 视频列表接口
let videoUrl = ApiUrl + "/demo/video/list"

Page({
  data: {
    tArray: [],//新闻类型数组
    loading: true,//是否显示加载
    ishidden: true,
    curpage: 0,//新闻列表坐标
    listpage: 0, //列表当前页码
    detaildata: [],//新闻列表
    category: "all",//当前分类
    viewHeight: 500, //scroll-view 高度
  },
  onReady: function () {

    //创建动画实例
    this.animation = wx.createAnimation({

      //动画持续时间
      duration: 2000,

      //   *  linear  动画一直较为均匀
      //  *  ease    从匀速到加速在到匀速
      //  *  ease-in 缓慢到匀速
      //  *  ease-in-out 从缓慢到匀速再到缓慢
      timingFunction: "ease",
    })

    //读取屏幕高度
    var res = wx.getSystemInfoSync();
    var width = res.screenHeight - 40 - 50 - 50;

    //设置scroll-view 高度
    this.setData({
      viewHeight: width
    });
  },
  // 页面加载
  onLoad: function () {

    //导航栏显示加载状态
    wx.showNavigationBarLoading();

    // 定义this代理，处理网络返回数据，不能直接使用this
    var that = this;

    //请求网络，获取type
    wx.request({
      url: tyepUrl,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //获取返回的数组
        let dataArr = [];
        dataArr = res.data;
        // 打印输出
        console.log(dataArr);
        //变量赋值
        that.setData({
          tArray: dataArr
        });
      }, fail: function (res) {

      }, complete: function (res) {
        //取消导航栏加载
        wx.hideNavigationBarLoading();
      }
    })

    //初始化页码从0开始
    this.setData({
      listpage: 0
    });

    //默认显示所有新闻
    this.readList("all")
  },
  // 类型点击事件
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
  //加载更多,view onReachBottom事件
  onReachBottom: function(e) {
    //页码+1，继续获取新闻
    var that = this;
    var pageTemp = (this.data.listpage + 1)
    that.setData({
      listpage: pageTemp
    });
    console.log('页码+1：' + this.data.listpage)
    //获取新闻
    this.readList()
  },

  onPullDownRefresh: function () {
    console.log("下拉刷新了")
    var that = this;
    this.setData({
      listpage: 0
    });
    this.readList()
    wx.stopPullDownRefresh()
  },

  //获取视频列表
  readList() {
    // // 显示加载状态
    this.setData({
      loading: false
    })
    //请求网络，获取type
    var that = this;
    wx.request({
      url: videoUrl,
      method: "POST",//默认GET
      data: {
        "category": this.data.category,
        "page": this.data.curpage
      },
      header: {
        //以表单形式提交
        "content-type": "application/x-www-form-urlencoded"

        //以json形式提交
        //  "content-type": "application/json
      },
      success: function (res) {

        //如果是第1页，坐标是0，数组先清空
        if (that.data.listpage == 0) {
          that.setData({
            detaildata: [],
          });
        }
        //解析数据
        var arr = res.data;
        console.log(arr)
        var dataArr = [];
        for (var index of arr) {
          if (index.has_video && index.video_url[0]=='/')
            index.video_url = ApiUrl + index.video_url;
          dataArr.push(index);
        }
        //修改数组
        var dataTemp = that.data.detaildata
        that.setData({
          detaildata: dataTemp.concat(dataArr),
        });
      }, fail: function (res) {

      }, complete: function (res) {
        //取消加载
        that.setData({
          loading: true
        })
      }
    })
  }
})