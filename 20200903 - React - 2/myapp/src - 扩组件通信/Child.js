import React, { Component, Fragment } from 'react';
import SubChild from './subChild';
class Child extends Component {
  render(){
    return <Fragment>
      <SubChild/>
    </Fragment>  
  }
}

export default Child;
