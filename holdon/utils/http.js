function doHttp(url, data, method, callback) {
  wx.request({
    url: url, //仅为示例，并非真实的接口地址
    data: data,
    method: method,
    header: {
      'content-type': 'application/json' // 默认值
    },
    beforeSend: (xhr) => {
      wx.getStorage({
        key: 'x-auth-token',
        success: function (res) {
          xhr.setRequestHeader('x-auth-token', res);
          console.log(res);
        }
      })
    },
    success: (res) => {
      console.log(res.data);
      callback(res);
    },
    fail: (res) => {
      wx.showModal({
        content: '网络通讯失败，请稍后再试',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('确定')
          }
        }
      });
    }
  })
}

function doGet(url, data, callback) {
  doHttp(url, data, "GET", callback);
}

function doPost(url, data, callback) {
  doHttp(url, data, "POST", callback);
}

module.exports = {
  doHttp: doHttp,
  doGet: doGet,
  doPost: doPost
}