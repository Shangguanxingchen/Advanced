import React, { useEffect, useState } from "react";
/*
  副作用函数
    useEffect(()=>{}); 组件挂载完成或更新完成之后执行
    useEffect(()=>{},[data]);  组件挂载完成 或data修改引起的组件更新完之后执行
    useEffect(()=>{},[]); 组件挂载完成
    useEffect(()=>{
      return ()=>{
        //返还函数
      }
    });

    挂载过程：
        组件挂载成功 --> 回调函数
    更新过程:
        组件即将更新 --> 执行 useEffect 的返还函数 --> 组件更新 -->  useEffect 的回调函数
    卸载过程：
        执行 useEffect 的返还函数
*/
function Child(props) {
  const {name,setName} = props;
  const [count,setCount] = useState(1);
  useEffect(()=>{
    console.log(count,"组件更新完成");
    return ()=>{
        console.log(count,"组件即将更新");
    }
  });
  return <div>
      <p>{name}</p>
      <button onClick={()=>{
        setName("开课吧");
      }}>中文名</button>
      <p>{count}</p>
      <button onClick={()=>{
          setCount(count+1);
      }}>递增</button>
  </div>
}


export default Child;