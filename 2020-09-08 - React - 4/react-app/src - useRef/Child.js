import React, { useEffect, useState, useRef } from "react";
function Child(props) {
  const {name,setName} = props;
  const [count,setCount] = useState(1);
  const countP = useRef(null);
  useEffect(()=>{
    console.log(countP.current);
  });
  return <div>
      <p>{name}</p>
      <button onClick={()=>{
        setName("开课吧");
      }}>中文名</button>
      <p ref={countP}>{count}</p>
      <button onClick={()=>{
          setCount(count+1);
      }}>递增</button>
  </div>
}


export default Child;