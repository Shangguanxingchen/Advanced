import React, { Component } from 'react';
/*
  受控组件: 将 state 和 表单控件的内部状态进行绑定
    输入框：value
    checkbox、radios： checked
  非受控组件:
     defaultValue
     defaultChecked 
*/
class Input extends Component {
  state={
    val:""
  }
  render() {
    let {val} = this.state;
    let {addTodo} = this.props;
    return <input 
      type="text" 
      value={val}
      onChange={({target})=>{
          this.setState({
            val:target.value
          })
      }}
      onKeyDown={(e)=>{
          if(e.keyCode === 13&&val.trim()){
             //console.log(val);
             addTodo(val);
             this.setState({
              val:""
            })
          }
      }}
    />
  }
}
// class Input extends Component {
//   state={
//     val:"初始值"
//   }
//   render() {
//     let {val} = this.state;
//     return <input 
//       type="text" 
//       defaultValue={val}
//       onKeyDown={(e)=>{
//           if(e.keyCode === 13){
//              console.log(e.target.value);
//           }
//       }}
//     />
//   }
// }

export default Input;
