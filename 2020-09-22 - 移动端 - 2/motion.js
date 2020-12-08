// 检测 IOS 12 的授权问题
(function () {
  let timer = 0;
  timer = setTimeout(() => {
    alert("请开启动作与访问权限，否则将无法使用该应用");
  }, 500);
  window.addEventListener("devicemotion", () => {
    clearTimeout(timer);
  }, { once: true })
})();
// 适配 IOS 13，添加事件时先要获取用户授权
function setMotion(cb,err) {
  if (typeof DeviceMotionEvent.requestPermission === 'function') { //requestPermission 是 IOS 13 之后有的，使用时需要先判断 
    // IOS 13 及之后
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          // 权限允许
          window.addEventListener("devicemotion", cb);
        } else {
          err();
        }
      })
      .catch(err);
  } else {
    // IOS 13 之前
    window.addEventListener("devicemotion", cb);
  }
}
