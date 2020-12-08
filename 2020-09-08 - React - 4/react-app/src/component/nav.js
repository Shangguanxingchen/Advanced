import React from "react";
import {Link} from "react-router-dom";
// 注意项目内的视图跳转不要使用 a 标签,而是使用 router 提供的 Link 组件
// 如果要进行外链跳转 请使用原生 a 标签
// Link - 点击 Link 切换URL
export default function Nav() {
    return <nav>
        {/* <a href="/">首页</a> */}
        <Link to="/">首页</Link>
        <span> | </span>
        <Link to="/home">首页2</Link>
        <span> | </span>
        {/* <a href="/about">关于我们</a> */}
        <Link to="/about">关于我们</Link>
        <span> | </span>
        {/* <a href="/join">加入我们</a> */}
        <Link to="/join">加入我们</Link>
        <span> | </span>
        <a href="https://www.baidu.com" target="_blank">百度</a>
    </nav>
}