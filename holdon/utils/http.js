function doHttp(url, data, header, method, callback) {
  wx.request({
    url: url, //仅为示例，并非真实的接口地址
    data: data,
    method: method,
    header: header,
    success: (res) => {
      callback(res.data, res.header);
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
  doHttp(url, data, getHeader(), "GET", callback);
}

function doPost(url, data, callback) {
  doHttp(url, data, getHeader(), "POST", callback);
}

/**
 * 登录
 */
function doLogin(url, callback) {
  doHttp(url, null, getHeader(false), "GET", function (data, xhr) {
    try {
      wx.clearStorageSync();
      wx.setStorageSync('x-auth-token', xhr["x-auth-token"] );
      callback();
      // console.log(xhr.getResponseHeader('x-auth-token'));
    } catch (e) {
      console.log(e);
    }
  });
}

function getHeader(hasToken) {
  if(hasToken===undefined) {
    hasToken = true;
  }
  var header = {
    'content-type': 'application/json'
  };
  if (!hasToken) {
    return header;
  }
  var token = getToken();
  if (token) {
    header = {
      'content-type': 'application/json', // 默认值
      'x-auth-token': token 
    };
  }
  return header;
}

function getToken() {
  try {
    return wx.getStorageSync('x-auth-token');
  } catch (e) {
    console.log(e);
  }
  return null;
}

module.exports = {
  doHttp: doHttp,
  doGet: doGet,
  doPost: doPost,
  doLogin: doLogin
}