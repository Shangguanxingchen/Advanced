import React, { useEffect, useState } from "react";
/*

    挂载过程：
        组件挂载成功 --> 回调函数
    更新过程:
        组件即将更新 --> 执行 useEffect 的返还函数 --> 组件更新 -->  useEffect 的回调函数
    卸载过程：
        执行 useEffect 的返还函数
*/
let mounted = true;
function Child(props) {
  const {name,setName} = props;
  const [count,setCount] = useState(1);
  // 组件更新完成之后
  useEffect(()=>{
    if(!mounted){
      console.log("组件更新完成");
    }
  });
  // 组件挂载完成
  useEffect(()=>{
      console.log("组件挂载完成");
      mounted = false;
  },[]);
  // 组件即将卸载
  useEffect(()=>{
    return ()=>{
      console.log("组件即将卸载");
      mounted = true;
    }
  },[]);
  
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