import React from "react";
import data from "../../static/data";
import { useParams } from "react-router-dom";
const pages = 5;
function getAll() {
  let all = [];
  for (let item in data) {
    data[item].map((value) => {
      all = all.concat(value);
    })
  }
  return all;
}
data.all = getAll();
function IndexList() {
  let { type = "all", page = 1 } = useParams();
  let nowData = data[type];
  let start = (page - 1) * pages;
  let end = start + pages;
  nowData = nowData.filter((item, index) => {
    return index >= start && index < end;
  });
  return <ul className="list">
    {nowData.map(item => <li key={item.id}>{item.title}</li>)}
  </ul>
}

export default IndexList;