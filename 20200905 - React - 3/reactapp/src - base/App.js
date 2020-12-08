import React, { createRef } from "react";
import List from "./list";
/*
  ref 作用获取 DOM 节点
*/
export default class App extends React.Component {
  h1Ref = createRef();
  pRef = createRef();
  listRef = createRef();
  componentDidMount(){
    console.log(this.h1Ref.current);
    console.log(this.pRef.current);
    console.log(this.listRef.current);
  }
  render() {
    console.log(this.h1Ref,"render");
    return <div>
        <h1 ref={this.h1Ref}>hello</h1>
        <p ref={this.pRef}>获取ref</p>
        <List ref={this.listRef} />
    </div>
  }
}