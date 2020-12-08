import React, { Component, Fragment } from 'react';
/*
  props 接收父组件传递过来的数据
    // props 是父组件传递过来的信息，在组件内部不能直接修改 props
*/
class Child extends Component {
  state={
    age: 7
  }
  render(){
    let {name,editName} = this.props;
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

export default Child;
