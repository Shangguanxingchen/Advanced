import React, { Component, Fragment } from 'react';
import Input from './input';
import List from './list';
/*
  受控组件
*/
class App extends Component {
  state= {
    data:[
      {
        id: 0,
        title:"信息1"
      },
      {
        id: 1,
        title:"信息2"
      }
    ]
  }
  addTodo=(newTodo)=>{
    let {data} = this.state;
    data.push({
      id: Date.now(),
      title:newTodo
    });
    this.setState({
      data
    })
  }
  removeTodo=(id)=>{
    let {data} = this.state;
    this.setState({
      data:data.filter(item=>(id!==item.id))
    })
  }
  render() {
    let {data} = this.state;
    return <Fragment>
       <Input 
         addTodo={this.addTodo}
       />
       <List 
          data = {data}
          removeTodo = {this.removeTodo}
       />
    </Fragment>
  }
}
export default App;
