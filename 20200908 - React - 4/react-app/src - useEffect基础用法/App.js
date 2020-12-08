import React, { useState } from "react";
import Child from "./Child";
function App(props) {
  const [name,setName] = useState("kkb"); 
  return <div> 
      <Child 
          name = {name}
          setName = {setName}
      />
  </div>
}


export default App;