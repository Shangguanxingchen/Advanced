import React from "react";
import Add from "./add";
import List from "./list";
import "./index.css";
export default class App extends React.Component {
  state = {
    data:[
        {
          id: 1,
          title:"todo-1"
        },{
          id: 2,
          title:"todo-2"
        }
    ]
  }
  add=(title)=>{
    let {data} = this.state;
    data.push({
      id:Date.now(),
      title
    })
    this.setState({
      data
    })
  }
  remove=(id)=>{
    let {data} = this.state;
    this.setState({
      data: data.filter(item=>(id!==item.id))
    })
  }
  render(){
    let {data} = this.state;
    return <div>
        <Add 
           add = { this.add }
        />
        <List 
          data = {data}
          remove = {this.remove}
        />
    </div>
  }
}