import React from "react";
import IndexNav from "./indexnav";
import IndexList from "./indexList";
import Pagination from "./pagination";
function IndexPage() {
  return <div className="wrap">
    <IndexNav />
    <IndexList />
    <Pagination />
  </div>
}

export default IndexPage;