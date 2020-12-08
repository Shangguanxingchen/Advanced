import React from "react";
import Child from "./Child";
import List from "./list";
// 调用组件时，可以将结构写在组件的开关标签之间，然后这些内容会被传递给 子组件的 props 中的children属性
export default class App extends React.Component {
  render() {
    return <div>
        <Child>
          <p>传递子元素</p>
          <List />
        </Child>
    </div>
  }
}