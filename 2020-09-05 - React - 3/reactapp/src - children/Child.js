import React from "react";
export default class Child extends React.Component {
  render() {
    let {children} = this.props;
    console.log(this.props);
    return <div>
          <h1>弹窗</h1>
          <div className="popup">
            {children}
          </div>
    </div>
  }
}