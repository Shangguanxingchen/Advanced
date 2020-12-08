import React from "react";
import Img from "../img/img.jpg";
function IndexPage() {
  return <div>
      <h1>首页视图</h1>
      {/* <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599585352327&di=e1e4ee422102b594340c401020e3c181&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201105%2F17%2F113554rnu40q7nbgnn3lgq.jpg" />/}
      {/* 本地图片要当做一个模块引入 */}
      {/* <img src={require("../img/img.jpg")} /> */}
      {/* <img src={Img}  /> * */}
    </div>
}


export default IndexPage;