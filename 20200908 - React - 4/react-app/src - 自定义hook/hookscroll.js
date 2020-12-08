import React, { useState, useEffect } from "react";
/*
  自定义 hook 
  要求命名必须以 use 开始
*/
function useScrollY() {
  const [scrollY,setScrollY] = useState(0);
  useEffect(()=>{
    window.onscroll = function () {
      setScrollY(window.scrollY);
    }
    setScrollY(window.scrollY);
    return ()=>{
      window.onscroll = null;
    }
  },[]);
  return [scrollY,(y)=>{
      window.scrollTo(0,y);
      setScrollY(y);
  }]
}


export {useScrollY}