import React from 'react';
import s from "./index.module.css"
let {title} = s;
function IndexPage() {
  return (<h1 className={s.title + " title"}>首页</h1>);
}

export default IndexPage;
