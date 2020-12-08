import React, {Fragment } from "react";
import { useScrollY } from "./hookscroll";
function App() {
  const [scrollY,setScrollY] = useScrollY();
  return <Fragment>
    <style>
     {`
        #root div {
          width: 200px;
          height: 200px;
          border: 2px solid red;
          background: #000;
          font: 50px/200px "宋体";
          color: #fff;
          text-align: center;
        }
        #root span {
           position: fixed;
           left: 0;
           top: calc(50% - 15px);
           width: 100px;
           font: 16px/30px "宋体";
           color: #fff;
           background: green;
           text-align: center;
        }
     `} 
    </style>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <span onClick={()=>{
        setScrollY(0);
    }}>{scrollY}</span>
  </Fragment>
}


export default App;