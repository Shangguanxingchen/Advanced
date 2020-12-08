import React, { Component } from 'react';
import Child from './Child';
class App extends Component {
  state = {
    name: "kkb",
    show: true
  }
  editName = (newName) => {
    this.setState({
      name: newName
    })
  }
  render() {
    let { name, show } = this.state;
    return <div>
      {show ? <Child
        name={name}
        editName={this.editName}
      /> : ""}
      <button onClick={()=>{
        this.setState({
          show:!show
        })
      }}>显示/隐藏</button>
    </div>
  }
}

export default App;
