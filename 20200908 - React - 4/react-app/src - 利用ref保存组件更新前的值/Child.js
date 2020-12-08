import React, { useEffect, useState, useRef, createRef } from "react";
/*
  useRef 除了可以关联DOM节点外，还可以保存组件更新前的一些状态
    当 useRef 中存储的是组件中的状态（或其他非关联DOM）时，组件更新 ref 中保存值并不会自动更新，需要我们手动更新
*/
function Child(props) {
  const {name,setName} = props;
  const [count,setCount] = useState(1);
  const prevCount = useRef(count);
  const countP = createRef();
  useEffect(()=>{
    console.log(countP);
    console.log(count,prevCount);
    prevCount.current = count;
  },[count]);
  return <div>
      <p ref={countP}>{name}</p>
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