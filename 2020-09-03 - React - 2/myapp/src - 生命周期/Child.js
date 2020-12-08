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
      static getDerivedStateFromProps(props) 获取新的 props，将 props 关联到 state
      shouldComponentUpdate 判断是否需要进行组件更新
        - 将新的props 和 新的state 更新到组件实例中
      render 根据新的 props 和 state 来去生成新的虚拟DOM 
      getSnapshotBeforeUpdate 在真实DOM更新前获取DOM快照
        - 将新的虚拟DOM 更新到真实DOM中
      componentDidUpdate 组件更新完成
    unMount 卸载阶段

    副作用：异步、DOM 操作
    副作用 操作一般放在 componentDidMount 和 componentDidUpdate 中
*/
function setWidth(){
  let width = document.querySelector("#width");
  width.innerHTML = window.innerWidth;
}
class Child extends Component {
  state = {
    age: 7
  }
  componentDidMount(){
    setWidth();
    window.onresize = setWidth;
  }

  componentWillUnmount(){
    window.onresize = null;
    console.log("组件即将卸载");
  }
  render() {
    let { age, name, editName } = this.state;
    return <Fragment>
      <div id="width">0</div>
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
