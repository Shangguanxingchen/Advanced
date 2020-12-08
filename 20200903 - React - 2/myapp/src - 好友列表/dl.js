import React, { Component } from 'react';
class Dl extends Component {
  render() {
    //console.log(this.props);
    let {data,name,openName,setOpenName} = this.props;
    return (
      <dl className={`friend-group ${name===openName?"expanded":""}`}>
        <dt onClick={()=>{
          setOpenName(name===openName?"":name);
        }}>{data.title}</dt>
        {data.list.map((item,index)=>{
          return <dd key={index}>{item.name}</dd>
        })}
      </dl>
    );
  }
}

export default Dl;
