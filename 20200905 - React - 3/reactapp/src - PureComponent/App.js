import React from "react";
import Add from "./add";
import List from "./list";
import "./index.css";
export default class App extends React.PureComponent {
  state = {
    count: 1,
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
      data:[...data]
    })
  }
  remove=(id)=>{
    let {data} = this.state;
    this.setState({
      data: data.filter(item=>(id!==item.id))
    })
  }
  render(){
    let {data,count} = this.state;
    console.log(1);
    return <div>
        <Add 
           add = { this.add }
        />
        <List 
          data = {data}
          remove = {this.remove}
        />
        <p>{count}</p>
        <button onClick={()=>{
            this.setState({
              count: 1
            })
        }}>测试</button>
    </div>
  }
}