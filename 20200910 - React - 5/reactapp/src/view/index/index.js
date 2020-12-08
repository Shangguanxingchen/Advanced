import React from "react";
import IndexNav from "./indexnav";
import IndexList from "./indexList";
import Pagination from "./pagination";
function IndexPage(props) {
    //console.log(props);
    return <div>
      <h1>首页视图</h1>
      <IndexNav />
      <IndexList />
      <Pagination />
    </div>
}

export default IndexPage;