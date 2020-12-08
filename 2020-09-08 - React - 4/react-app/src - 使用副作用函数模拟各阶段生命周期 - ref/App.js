import React, { useState } from "react";
import Child from "./Child";
function App(props) {
  const [name,setName] = useState("kkb"); 
  const [show,setShow] = useState(true);
  return <div> 
      <Child 
          name = {name}
          setName = {setName}
      />
      {show?<Child 
          name = {name}
          setName = {setName}
      />:""}
      <button onClick={()=>{
        setShow(!show);
      }}>显示/隐藏</button>
  </div>
}


export default App;