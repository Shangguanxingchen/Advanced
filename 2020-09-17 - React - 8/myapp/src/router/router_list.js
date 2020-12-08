import React from "react";
import UndefinedPage from "../view/404";
import AboutPage from "../view/about";
import APIPage from "../view/api";
import GetstartPage from "../view/getstart";
import IndexPage from "../view/index";
import TopicPage from "../view/topic";
import UserPage from "../view/user";

const routes = [{
  path: "/",
  exact: true,
  render(props){
    return <IndexPage {...props} />
  }
},{
  path: "/topic/:id",
  exact: true,
  render(props){
    return <TopicPage {...props} />
  }
},{
  path: "/getstart",
  exact: true,
  render(props){
    return <GetstartPage {...props} />
  }
},{
  path: "/user/:loginname",
  exact: true,
  render(props){
    return <UserPage {...props} />
  }
},{
  path: "/about",
  exact: true,
  render(props){
    return <AboutPage {...props} />
  }
},{
  path: "/api",
  exact: true,
  render(props){
    return <APIPage {...props} />
  }
},{
  path: "",
  exact: false,
  render(props){
    return <UndefinedPage {...props} />
  }
}];

const navs=[
  {
      title: "首页",
      to: "/"
  },{
      title:"新手入门",
      to: "/getstart"
  },{
      title:"API",
      to: "/api"
  },{
      title:"关于",
      to: "/about"
  }
];
const indexNavs = [
  {
      title: "全部",
      to:"/?tab=all"
  },{
      title: "精华",
      to:"/?tab=good"
  },{
      title: "分享",
      to:"/?tab=share"
  },{
      title: "问答",
      to:"/?tab=ask"
  },{
      title: "招聘",
      to:"/?tab=job"
  },{
      title: "客户端测试",
      to:"/?tab=dev"
  }
]

export {routes,navs,indexNavs};