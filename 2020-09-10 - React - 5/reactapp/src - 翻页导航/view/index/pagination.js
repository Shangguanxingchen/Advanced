import React, { Fragment } from "react";
import data from "../../static/data";
import { useParams, Link } from "react-router-dom";
const pages = 5;
function Pagination() {
  let {type="news",page=1} = useParams();
  page = Number(page);
  let nowData = data[type];
  let pageLen = Math.ceil(nowData.length/pages);
  function setPage() {
     let pageNub = [];
     for(let i = 1; i <= pageLen;i++){
      pageNub.push(
        i===page?<span key={i}>{i}</span>:<Fragment>
            <span> </span>
            <Link key={i} to={`/${type}/${i}`}>{i}</Link>
            <span> </span>
        </Fragment>
      );
     } 
     return pageNub;
  }
  return <div>
        {/* 上一页 */}
        {page>1?<Link to={`/${type}/${page - 1}`}>上一页</Link>:<span>上一页</span>}
        {/* 页码 */}
        {setPage()}
        {/* 下一页 */}
        {page<pageLen?<Link to={`/${type}/${page + 1}`}>下一页</Link>:<span>下一页</span>}
  </div>
}

export default Pagination;