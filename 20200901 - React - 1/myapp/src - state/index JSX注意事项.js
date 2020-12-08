import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
/*
  JSX 的注意事项
  1. JSX 不是html，很多属性在编写时不一样
      - style 接收的值是一个对象
      - className
  2. JSX 必须有一个且只有一个顶层父级 
      - 如果该父级不需要在DOM中显示可以使用 Fragment
  3. 列表渲染时，必须有 key 值
  4. 在 jsx 所有标签必须闭合
  5. 组件的首字母一定大写，标签一定要小写
*/
// let styl = {
//   width: 100,
//   height: 100,
//   background: "red"
// }
// let ul = <ul style={styl}></ul>;
let ul = <Fragment>
  <ul 
    style={{
      width: 100,
      height: 100,
      background: "red"
    }}
    className="list"
  >ul</ul>
  <div>div</div>
  <input type="text" />
</Fragment>;
ReactDOM.render(
  ul,
  document.querySelector('#root')
);
