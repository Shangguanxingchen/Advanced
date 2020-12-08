import React from 'react';
import ReactDOM from 'react-dom';
/*
  JSX 是一个基于 JavaScript + XML 的一个扩展语法
    - 它可以作为值使用
    - 它并不是字符串
    - 它也不是HTML
    - 它可以配合JavaScript 表达式一起使用
  插值：
    插值中接收的是一个 JS 表达式
    表达式：有计算结果的叫做表达式(产生值的一组代码的集合)
      1. 运算式(数字运算、逻辑运算)
      2. 函数调用
      3. 变量
  不同数据类型在 JSX 中的表现
      - 字符串、数字：原样输出
      - 布尔值、空、未定义、symbol会被忽略
       typeof: symbol/undefind/function/number/string/boolean/object

       标准：
         基本类型：
            symbol/undefind/null/number/string/boolean
         复合类型：
            object

*/
// let inner = "你好 React";
// let section = <section className="wrap">
//   <header>
//     <h1 id="title">{inner}</h1>
//     <p>学习 React 的第一天</p>
//   </header>
//   <ul>
//     <li>{1}</li>
//     <li>{"abc"}</li>
//     <li>{Symbol("aa")}</li>
//     <li>{true}</li>
//   </ul>
// </section>;
// 列表输出
let arrData = [
  "列表1",
  "列表2",
  "列表3"
];

// let ul = <ul>{[1,2,3]}</ul> // 注意 JSX 的内容中的插值可以接收数组，输出时会把 ， 去掉数组的内容整体输出
let arrInner = arrData.map((item,index)=>{
  return <li key={index}>{item}</li>
});
let ul = <ul>{arrInner}</ul>
ReactDOM.render(
  ul,
  document.querySelector('#root')
);
// 注意 JSX 的内容中的插值中，不能插入对象
let obj = {inner:"这是头部"}
// let header = <header>{obj}</header>
// ReactDOM.render(
//   header,
//   document.querySelector('#root')
// );
