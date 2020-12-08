import React, { Component, Fragment } from 'react';
import context from "./context";
class SubChild extends Component {
  state={
    age: 7
  }
  static contextType = context;
  render(){
    //console.log(this);
    let {name,editName} = this.context;
    let {age} = this.state;
    return <Fragment>
        <p>姓名: {name}</p>
        <button onClick={()=>{
          editName("开课吧");
        }}>修改姓名</button>
        <p>年龄: {age}</p>
        <button onClick={()=>{
          this.setState({
            age: age+1
          })
        }}>长大一岁</button>
    </Fragment>  
  }
}

export default SubChild;
