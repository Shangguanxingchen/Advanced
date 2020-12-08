import React, { Component } from 'react';
class Dl extends Component {
  state={
    isOpen: false
  }
  render() {
    let {data} = this.props;
    let {isOpen} = this.state;
    return (
      <dl className={`friend-group ${isOpen?"expanded":""}`}>
        <dt onClick={()=>{
            this.setState({
              isOpen:!isOpen
            })
        }}>{data.title}</dt>
        {data.list.map((item,index)=>{
          return <dd key={index}>{item.name}</dd>
        })}
      </dl>
    );
  }
}

export default Dl;
