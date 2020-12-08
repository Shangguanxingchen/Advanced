import React, { Component } from 'react';
import datas from "./data";
import Dl from './dl';
class App extends Component {
  state = {
    openName: ""// 存储当前哪一项展开，如果没有展开项 openName 为 空
  }
  setOpenName=(openName)=>{
    this.setState({
      openName
    })
  }
  render() {
    return <div className="friend-list">
        {Object.keys(datas).map((item,index)=>{
          return <Dl 
              key={index}
              name={item}
              openName = {this.state.openName}
              setOpenName = {this.setOpenName}
              data={datas[item]}
          />
        })}
    </div>
  }
}

export default App;
