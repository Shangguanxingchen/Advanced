import React, { Component } from 'react';
import Child from './Child';
class App extends Component {
  state={
    name: "kkb"
  }
  editName=(newName)=>{
    this.setState({
      name: newName
    })
  }
  render(){
    let {name} = this.state;
    return <div>
        <Child 
          name={name} 
          editName = {this.editName}  
        />
    </div>  
  }
}

export default App;
