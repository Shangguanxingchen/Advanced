import React, { Component } from "react"

export default class List extends Component {
  render() {
    return <ul ref={this.listRef}>
      <li>列表项-1</li>
      <li>列表项-2</li>
      <li>列表项-3</li>
    </ul>;
  }
}