import React, { useEffect, useState, useRef } from "react";

function Child(props) {
  const {name,setName} = props;
  const [count,setCount] = useState(1);
  const mounted = useRef(true);
  // 组件更新完成之后
  useEffect(()=>{
    if(!mounted.current){
      console.log("组件更新完成");
    }
  });
  // 组件挂载完成
  useEffect(()=>{
      console.log("组件挂载完成");
      mounted.current = false;
  },[]);
  // 组件即将卸载
  useEffect(()=>{
    return ()=>{
      console.log("组件即将卸载");
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