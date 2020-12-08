import React, { Fragment } from "react";
import data from "../../static/data";
import { useParams, Link } from "react-router-dom";
const pages = 5;
function Pagination() {
  let {type="all",page=1} = useParams();
  page = Number(page);
  let nowData = data[type];
  let pageLen = Math.ceil(nowData.length/pages);
  function setPage() {
     let pageNub = [];
     for(let i=1; i <= pageLen; i++){
      pageNub.push(
        i === page ? <a className="active" key={i}>{i}</a> : <Fragment  key={i} >
          <Link to={`/home/${type}/${i}`}>{i}</Link>
        </Fragment>
      );
     } 
     return pageNub;
  }
  return <div className="pagination">
        <Link to={`/home/${type}/${Math.max(1,page - 1)}`}>上一页</Link>
        {setPage()}
        <Link to={`/home/${type}/${Math.min(pageLen,page + 1)}`}>下一页</Link>
  </div>
}

export default Pagination;