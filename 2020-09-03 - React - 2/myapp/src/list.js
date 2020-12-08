import React, { Component } from 'react';
/*
  受控组件
*/
class List extends Component {
  render() {
    let {data,removeTodo} = this.props;
    return <ul>
      {data.map((item,index)=>{
        return <li key={index}>{item.title} - <a onClick={()=>{
          removeTodo(item.id);
        }}>删除</a></li>
      })}
    </ul>
  }
}

export default List;
