import React from 'react';
import ReactDOM from 'react-dom';
let a = 10;
let b = 5; 
function is() {
    if(a<b){
      return a;
    }
    return b;
} 
//条件输出
let ul = <ul>
    <li>{true&&a}</li>
    <li>{false||b}</li>
    <li>{a>b?a:b}</li>
    <li>{is()}</li>
</ul>
ReactDOM.render(
  ul,
  document.querySelector('#root')
);
