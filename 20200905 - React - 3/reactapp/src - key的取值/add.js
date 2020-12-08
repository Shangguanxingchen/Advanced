import React from "react";

export default class Add extends React.Component {
  state = {
    val: ""
  }
  render() {
    let { val } = this.state;
    let { add } = this.props;
    return <div>
      <input
        type="text"
        value={val}
        onChange={({ target }) => {
          this.setState({
            val: target.value
          })
        }}
      />
      <button onClick={() => {
        if (val.trim()) {
          add(val);
          this.setState({
            val: ""
          })
        }
      }}>提交</button>
    </div>
  }
}