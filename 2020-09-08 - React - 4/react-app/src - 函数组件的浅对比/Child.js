import React from "react";
/*
  函数组件再更新时，会对其依赖的数据(state和props)，进行浅对比，如果浅对比没有修改则不进行更新

  在函数组件中，如果其依赖的数据是引用类型，则更新时注意要返回新的引用
*/
function Child(props) {
  let {data,setData} = props;
  let {name,count} = data;
  return <div>
      <p>{name}</p>
      <p>{count}</p>
      <button onClick={()=>{
          count++;
          setData({...data,count});
      }}>递增</button>
  </div>
}


export default Child;