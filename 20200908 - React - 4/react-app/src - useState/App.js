import React, { useState } from "react";
/*
在 React 16.7 之前，函数式组件又被称之为纯渲染组件
hooks
React hooks 是React 16.8中的新增功能。它们使您无需编写类即可使用状态和其他React功能

useState 赋予函数组件 状态

`const [state, setState] = useState(initialState);`
            let [状态,修改该状态的方法] = useState(初始值);
            1. 在同一个组件中可以使用 useState 定义多个状态
            2. 注意 useState 返回的 setState 方法，不会进行对象合并
            3. 注意 useState 返回的 setState 方法同样是异步方法
*/
// function App(props) {
//   const [count,setCount] = useState(1);
//   return <div>
//       <p>{count}</p>
//       <button onClick={()=>{
//           setCount(count+1);
//       }}>递增</button>
//   </div>
// }
/*
  注意：
    useState 下的 setState 方法，也会进行浅对比
*/
// function App(props) {
//   const [data,setData] = useState({
//       count: 1,
//       name: "kkb"
//   });
//   console.log("render");
//   let {count,name} = data;
//   return <div>
//       <p>{name}</p>
//       <p>{count}</p>
//       <button onClick={()=>{
//           setData({
//               ...data,  
//               count: count + 1
//           });
//           console.log(data.count);
//       }}>递增</button>
//   </div>
// }
function App(props) {
  const [name,setName] = useState("kkb");
  const [count,setCount] = useState(1);
  return <div>
      <p>{name}</p>
      <p>{count}</p>
      <button onClick={()=>{
          setCount(count+1);
      }}>递增</button>
  </div>
}


export default App;