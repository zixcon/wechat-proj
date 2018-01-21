/* 毫秒级倒计时 */
function countdown(that, total_micro_second) {
  // 渲染倒计时时钟
  that.setData({
    clock: dateformat(total_micro_second)
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    // timeout则跳出递归
    return;
  }
  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    countdown(that, total_micro_second);
  }, 10)
}

// 时间格式化输出，如3:25:19 86。每10ms都会调用一次
function dateformat(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = Math.floor((second - hr * 3600) / 60);
  // 秒位
  var sec = (second - hr * 3600 - min * 60);
  // equal to => var sec = second % 60;
  // 毫秒位，保留2位
  var micro_sec = Math.floor((micro_second % 1000) / 10);
  return hr + ":" + min + ":" + sec + " " + micro_sec;
}

function myfunc() {
  console.log("myfunc....");
}

module.exports = {
  countdown: countdown,
  myfunc:myfunc
}