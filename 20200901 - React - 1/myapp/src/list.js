import React from "react";
export default class List extends React.Component {
  state={
    show: false
  }
  render() {
    let {show} = this.state;
    let {data} = this.props;
    let {name,children} = data;
    return <li className={show?"subList-show":""}>
        <a onClick={()=>{
           this.setState({
             show:!show
           })
        }}>{name}</a>
        <ul className="subList">
          {
            children.map((item,index)=>{
                return <li key={index}>{item.name}</li>
            })
          }
        </ul>
      </li>
  }
}