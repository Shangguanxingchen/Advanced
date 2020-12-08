import React from 'react';
import ReactDOM from 'react-dom';
let _state;

function newUseState(initValue) {
    let state = _state === undefined?initValue:_state;
    let setState = newVal =>{
      _state = newVal;
      render();
    }
    return [state,setState];
}

function App(params) {
   let [count,setCount] = newUseState(1);
   console.log(count);
   return <div>
      <h1>{count}</h1>
      <button onClick={()=>{
          setCount(count + 1)
      }}>递增</button>
   </div> 
}
function render() {
  ReactDOM.render(
    <App />,
  document.getElementById('root')
);
}
render();

