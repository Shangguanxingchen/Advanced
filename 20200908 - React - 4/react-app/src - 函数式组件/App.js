import React from "react";
/*
  ### 函数式组件
- 函数式组件，本质就是一个常规函数，接收一个参数 props 并返回一个 reactElement
- 函数式组件中没有this和生命周期函数/state,不能使用 string ref
- 使用函数式组件时，应该尽量减少在函数中声明子函数，否则，组件每次更新时都会重新创建这个函数

在 React 16.7 之前，函数式组件又被称之为纯渲染组件
*/

/*
  jsx --- React.createElement
*/
function App(props) {
  console.log(props);
  return <h1>hello 函数组件</h1>
}


export default App;