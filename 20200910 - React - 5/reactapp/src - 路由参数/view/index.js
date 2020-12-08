import React from "react";
/*
  路由组件：被 Route 调用的组件叫做路由组件
  Route 在调用路由组件时，会将相应的路由参数传递给该组件
  路由参数：
    history 历史记录相关信息
        length 当前域名在该浏览器下存储的历史记录条数
        go()  跳转历史记录
          go(2) 正值历史记录向前跳转，否向后跳转
        goBack()
            在历史记录中回退一步
        goForward()
            在历史记录中前进一步
        push()
            跳转历史记录(跳转url地址)
    location 当前浏览器地址相关信息
        hash: ""
        pathname: "/"  当前的url
        search: ""
        state: 
    match 当前路由匹配的相关信息
        isExact: true  当前路由是否是精确匹配
        params: {} 动态的路由的参数
        path: "/" 当前的path
        url: "/" 当前的url
*/
function IndexPage(props) {
    let {history,location,match} = props;
    console.log(match);
    return <div>
      <h1>首页视图</h1>
      <button onClick={()=>{
          history.push("/about","hehe");
      }}>跳转至关于</button>
    </div>
}

export default IndexPage;