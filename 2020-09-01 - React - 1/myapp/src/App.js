import React from "react";
import "./css/index.css";
import List from "./list";
import data from "./data";
/*
  1. 构建静态布局
  2. 拆分组件
  3. 关联数据
  4. 添加交互

  props 父组件向子组件传递数据
    1. 父级调用子组件时，将要传递数据添加在 子组件的属性中
    2. 在子组件中获取 this.props 就可以获取到父级传递过来的数据
*/
export default class App extends React.Component {
  render() {
    return <ul id="menu">
      {
        data.map((item,index)=>{
          return <List key={index} data={item} />
        })    
      }
    </ul>;
  }
}