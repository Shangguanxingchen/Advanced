import React, { Component, Fragment } from 'react';
/*
  生命周期函数
    所谓的生命周期就是指某个事物从开始到结束的各个阶段，当然在 React.js 中指的是组件从创建到销毁的过程，React.js 在这个过程中的不同阶段调用的函数，通过这些函数，我们可以更加精确的对组件进行控制，前面我们一直在使用的 render 函数其实就是组件生命周期渲染阶段执行的函数
    
    mount 挂载阶段
      constructor 初始化组件
      static getDerivedStateFromProps 将 props 关联到 state 中
      render 创建虚拟DOM
          将虚拟 DOM 挂载到真实的DOM中
      componentDidMount 挂载完成,注意要获取真实DOM节点，应该在该函数中获取
    update 更新阶段
    unMount 卸载阶段
*/
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 7
    };
    console.log("mount", 0);
  }
  static getDerivedStateFromProps(props) {
    //
    console.log("mount", 1);
    return {
      ...props
    };
  }
  componentDidMount(){
    console.log("mount",3);
  }
  render() {
    console.log("mount", 2, this.state);
    let { age, name, editName } = this.state;
    return <Fragment>
      <p>姓名: {name}</p>
      <button onClick={() => {
        editName("开课吧");
      }}>修改姓名</button>
      <p>年龄: {age}</p>
      <button onClick={() => {
        this.setState({
          age: age + 1
        })
      }}>长大一岁</button>
    </Fragment>
  }
}

export default Child;
