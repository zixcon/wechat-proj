const auth = require('../../../utils/auth.js');
const http = require('../../../utils/http.js');
const app = getApp()
// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signature:null,
    userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;
    // https://mp.weixin.qq.com/debug/wxadoc/dev/api/authorize.html#wxauthorizeobject
    wx.getSetting({
      success: (res) => {
        console.log(res.authSetting);
        if (null==res.authSetting) {
          console.log('首次授权');
        } else {
          console.log('不是第一次授权', res.authSetting);
        }
        console.log(res.authSetting["scope.userInfo"]);
        if (res.authSetting["scope.userInfo"]) {//如果用户重新同意了授权登录
          wx.getUserInfo({
            success: res => {
              that.setData({
                userInfo:res.userInfo
              });
              http.doGet("https://liaolongjun.duapp.com/ace/https.do", {}, function (data) {
                console.log(data);
              });
              http.doPost("https://holdon.top/wx/user/login",res.userInfo,function(data){
              console.log(data);
              });
              console.log("user authed");
              console.log(res);
            },
            fail: data => {
              console.log("user authed denyed");
              console.log(res);
            }
          })
        } else {
          // 跳转至手动授权页面
          wx.openSetting();
        }
      }
    });
    // if (this.globalData == null) {
    //   wx.showModal({
    //     title: '弹窗标题',
    //     content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
    //     confirmText: "主操作",
    //     cancelText: "辅助操作",
    //     success: function (res) {
    //       console.log(res);
    //       if (res.confirm) {
    //         console.log('用户点击主操作')
    //       } else {
    //         console.log('用户点击辅助操作')
    //       }
    //     }
    //   });
    // } else {
    //   console.log('用户点击主')
    //   this.setData({ username: app.appData.userinfo.username })
    // }
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

  }
})