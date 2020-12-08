import React, { Component } from "react";
import Count from "./Count";
/*
  类组件：
    1. 组件必须继承自 React.Component
    2. 类组件中必须定义 render 方法，render 方法的返回值定义的是该组件要输出的视图
    3. 组件名的首字母必须大写
*/

class App extends Component {
  render(){
    return <div>
      <Count />
    </div>
  }
}

export default App;