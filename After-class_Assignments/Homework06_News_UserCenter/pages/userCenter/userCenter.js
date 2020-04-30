var MD5 = require('../utils/MD5');
Page({
  data: {
    userInfo: {},
    sectionVIP: {
      imagesrc: "../../imges/UserCenter/arrowRight.png",
      imagename: "开通VIP服务"
    },
    section1: {
      imagesrc: "../../imges/UserCenter/arrowRight.png",
      imagename: "我的动态"
    },
    section2: [{
      imagesrc: "../../imges/UserCenter/arrowRight.png",
      imagename: "摇一摇"
    }, {
      imagesrc: "../../imges/UserCenter/arrowRight.png",
      imagename: "附近的人"
    },
    ],
    section3: [{
      imagesrc: "../../imges/UserCenter/arrowRight.png",
      imagename: "我的消息"
    }, {
      imagesrc: "../../imges/UserCenter/arrowRight.png",
      imagename: "我的钱包"
    }, {
      imagesrc: "../../imges/UserCenter/arrowRight.png",
      imagename: "我的任务"
    }, {
      imagesrc: "../../imges/UserCenter/arrowRight.png",
      imagename: "意见反馈"
    }, {
      imagesrc: "../../imges/UserCenter/arrowRight.png",
      imagename: "关于我们"
    }]
  },
  bindWxTap: function () {
    var that = this;
    wx.login({
      success(res) {
        if (res.code) {
          //此处可向后端发起网络请求
          console.log('登录成功！')
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 1000
          })
          that.showUserInfo()
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  bindBuyVIP: function () {
    var timeStamp = String(Date.parse(new Date()) / 1000);
    var nonceStr = this.getNonceStr();
    //测试数据
    //nonceStr = '5K8264ILTKCH16CQ2502SI8ZNMTM67VS';
    //timeStamp = '1490840662';
    var paySignFactor = `appId=	wxfa9070a2b7990ba8&nonceStr=${nonceStr}&package=prepay_id=wx2017033010242291fcfe0db70013231072&signType=MD5&timeStamp=${timeStamp}&key=qazwsxedcrfvtgbyhnujmikolp111111`;
    var paySign = MD5.hexMD5(paySignFactor).toUpperCase();
    console.log(paySign);
    wx.requestPayment({
      timeStamp: timeStamp,
      nonceStr: nonceStr,
      package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
      signType: 'MD5',
      paySign: paySign,
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  getNonceStr: function () {
    const charts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var output = '';
    for(var i=0;i<32;i++){
      var index = Math.floor(Math.random() * charts.length);
      output = output + charts[index];
    }
    return output;
  },
  showUserInfo: function () {
    //检查用户信息授权
    wx.getSetting({
      success(res) {
        console.log(res)
        console.log('用户信息权限为：' + res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo']) {
          // 用户已经同意小程序使用用户信息
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              // 打印用户信息
              console.log(userInfo)
            }
          })
        }else{
          console.log('用户拒绝授权，打开授权设置')
          wx.openSetting({
            success(res) {
              console.log(res.authSetting)
              // res.authSetting = {
              //   "scope.userInfo": true,
              //   "scope.userLocation": true
              // }
            }
          })
        }
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})