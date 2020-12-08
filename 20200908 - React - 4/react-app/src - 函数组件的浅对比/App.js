import React, { useState } from "react";
import Child from "./Child";
function App(props) {
  let [data,setData] = useState({
    name: "kkb",
    count: 1
  });
  return <div>
      <Child 
          data = {data}
          setData = {setData}
      />
  </div>
}


export default App;