import React, { useEffect } from 'react';
import qs from "qs";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTopics } from '../../store/action';
/*let s = `?page=1&tab=all`;
console.log(qs.parse(s.slice(1)));*/
// let o = {
//   page: "1",
//   tab: "all"
// };
// console.log(qs.stringify(o));
function IndexPage() {
  const { loading, data, limit } = useSelector(state => state.topics);
  const getData = useTopics();
  const { search } = useLocation();
  const {page,tab} = qs.parse(search.slice(1));
  useEffect(() => {
    getData(page,tab,limit);
  },[page,tab])
  return <div>
    {loading ? "数据请求中" : "展示数据"}
    <Link to="/?page=4&tab=all">2</Link>
  </div>;
}

export default IndexPage;
