import React, { Component } from 'react';
import {Provider} from "./context";
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
      <Provider
        value={{
          name: name,
          editName:this.editName
        }}
      >
        <Child />
      </Provider>
    </div>  
  }
}

export default App;
