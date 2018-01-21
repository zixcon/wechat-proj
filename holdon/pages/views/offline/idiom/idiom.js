const time = require('../../../../utils/time.js');

// pages/views/offline/idiom/idiom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idiom: {},
    clock: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    time.myfunc();
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

  idiomstart: function() {
    var that = this;
    // todo url请求
    var idiom = {num:1,time:30,content:"森罗万象"}
    console.log(idiom);
    this.setData({
      idiom: idiom
    })
    time.countdown(that, 30 * 1000)
  },

  idiomright: function() {
    // alter 确认发送
    // todo url请求
  },
  idiomwrong: function() {
    // todo url请求
    // alter
  }
})