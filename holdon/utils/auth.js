const crypt = require("WXBizDataCrypt")
// https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html
function cryptUserInfo(res) {
  var appId = "wxb5dde412aadd4a17";
  var sessionKey = "";
  var encryptedData = res.encryptedData;
  var iv = res.iv;
  var pc = new WXBizDataCrypt(appId, sessionKey);
  var data = pc.decryptData(encryptedData, iv);
  console.log('解密后 data: ', data)
}

module.exports = cryptUserInfo
