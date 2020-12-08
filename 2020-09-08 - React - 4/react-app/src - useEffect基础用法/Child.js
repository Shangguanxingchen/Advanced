import React, { useEffect, useState } from "react";
/*
  副作用函数
    useEffect(()=>{}); 组件挂载完成或更新完成之后执行
    useEffect(()=>{},[data]);  组件挂载完成 或data修改引起的组件更新完之后执行
    useEffect(()=>{},[]); 组件挂载完成
*/
function Child(props) {
  const {name,setName} = props;
  const [count,setCount] = useState(1);
  // useEffect(()=>{
  //   console.log("组件挂载完成或更新完成之后执行"); 
  // });
  // useEffect(()=>{
  //     console.log("组件挂载完，或name有修改引起的组件更新完成之后");
  // },[name])
  useEffect(()=>{
    console.log("组件挂载完成之后");
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