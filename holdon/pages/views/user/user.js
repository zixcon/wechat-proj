// const auth = require('../../../utils/auth.js');
const http = require('../../../utils/http.js');
const user = require('./holdon-user.js');
const app = getApp();
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
    wx.login({
      success: (res) => {
        http.doLogin("http://127.0.0.1:8080/wx/auth/login?jscode=" + res.code, user.sendUserInfo(that)); 
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