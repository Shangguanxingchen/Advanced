import React, { Component } from "react";
/*
命令式编程 和 声明式编程
- 命令式编程：告诉计算机怎么做（How） - 过程
- 声明式编程：告诉计算机我们要什么（What） - 结果

*/
// class Count extends Component {
//   handlerClick=()=>{
//       let count = document.querySelector("#count");
//       count.innerHTML = Number( count.innerHTML) + 1;
//   }
//   render(){
//     return <div>
//         <p id="count">1</p>
//         <button
//           onClick={this.handlerClick}
//         >递增</button>
//     </div>
//   }
// }
/*
  state 状态
    当状态更新时，视图会同步更新
  setState() 
    更新状态
    setState({
      count: newState 
    })  
    !!! 修改 state 必须借助 setState，直接修改 state 无效
*/
class Count extends Component {
  state = {
      count: 1
  }
  render(){
    let {count} = this.state;
    return <div>
        <p>{count}</p>
        <button
          onClick={()=>{
            count++;
            this.setState({
              count
            })
          }}
        >递增</button>
    </div>
  }
}

export default Count;