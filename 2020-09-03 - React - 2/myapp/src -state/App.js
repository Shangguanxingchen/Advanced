import React, { Component } from 'react';
/*
  state 状态，是 Component 的属性,我们会将组件相关的数据放入 state ，然后通过 state 属性 和 组件要构建的视图进行绑定，当 state 更新时，同步会更新我们的视图

  - setState(updater, [callback])
    - updater: 更新数据 OBJECT/FUNCTION
    - callback: 更新成功后的回调 FUNCTION
    - 异步:react通常会集齐一批需要更新的组件，然后一次性更新来保证渲染的性能
    - 浅合并 Objecr.assign()
    - 调用 setState 之后，会触发生命周期，重新渲染组件
*/
class App extends Component {
  state={
    count: 1,
    name: "kkb"
  }
  render(){
    let {count,name} = this.state;
    console.log("render",count);
    return <div>
      <p>{name}</p>
      <strong>{count}   </strong>
      <button onClick={()=>{
        this.setState(function(){
          count++;
          return {
            count
          }
        },()=>{
          console.log("组件更新完成");
        });
      }}>递增</button>
    </div>  
  }
}

export default App;
