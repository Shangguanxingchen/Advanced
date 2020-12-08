import React, { Component } from "react";
/*
  事件：
   1. on之后,每个单词首字母大写 
   2. 事件处理函数中 this 默认为 undefined 的
      通常情况下 我们希望 this 指向当前实例：
        1. 箭头函数
        2. 绑定 this
   3. 获取事件源：event.target||event.currentTarget
*/
// class Count extends Component {
//   render(){
//     return <div>
//         <p>1</p>
//         <button
//           onClick={()=>{
//             console.log(this);
//           }}
//         >递增</button>
//     </div>
//   }
// }
// class Count extends Component {
//   handlerClick=()=>{
//     console.log(this);
//   }
//   render(){
//     return <div>
//         <p>1</p>
//         <button
//           onClick={this.handlerClick}
//         >递增</button>
//     </div>
//   }
// }
class Count extends Component {
  constructor(props){
      super(props);
      this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick(e){
    console.log(this,e.target,e.currentTarget);
  }
  render(){
    return <div>
        <p>1</p>
        <button
          onClick={this.handlerClick}
        >递增</button>
    </div>
  }
}

export default Count;