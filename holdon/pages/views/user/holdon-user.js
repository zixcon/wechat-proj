const http = require('../../../utils/http.js');
// 发起用户信息请求
function sendUserInfo(that) {
  // https://mp.weixin.qq.com/debug/wxadoc/dev/api/authorize.html#wxauthorizeobject
  wx.getSetting({
    success: (res) => {
      console.log(res.authSetting);
      if (null == res.authSetting) {
        console.log('首次授权');
      } else {
        console.log('不是第一次授权', res.authSetting);
      }
      console.log(res.authSetting["scope.userInfo"]);
      if (res.authSetting["scope.userInfo"]) {//如果用户重新同意了授权登录
        wx.getUserInfo({
          success: res => {
            that.setData({
              userInfo: res.userInfo
            });
            http.doPost("http://127.0.0.1:8080/wx/auth/userInfo", res, function (data) {
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
}

module.exports = {
  sendUserInfo: sendUserInfo
}