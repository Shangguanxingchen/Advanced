import React from "react";
/*
  key 属性:
      虚拟DOM 独一无二的 id
    a,b,c,d
    0,1,2,3

    b,c,d,e
    1,2,3,4



  key 该如何取值？
  两个原则：
    1. 一个列表中的每一项 key 是唯一的  
    2. 视图更新前后，同一个元素的 key 值,要保持不变
      1. 如果数据的顺序会发生变化 key 最好使用 数据的id
      2. 如果明确知道 key 顺序不会变化，用 index 也无所谓

*/
export default class List extends React.Component {
  render(){
    let {data,remove} = this.props;
    return <ul>
        {
          data.map((itmeData)=>{
              return <li key={itmeData.id} data-btn>{itmeData.title} - <a onClick={()=>{remove(itmeData.id)}}>删除</a></li>
          })
        }
    </ul>
  }
}