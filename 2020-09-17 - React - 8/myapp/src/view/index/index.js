import React, { Fragment, useEffect } from 'react';
import qs from "qs";
import Nav from '../../component/nav';
import { indexNavs } from '../../router/router_list';
import IndexList from './list';
function IndexPage() {
  return <div className="main">
      <Nav 
        navs = {indexNavs}
        getSelected={(location)=>{
            let { search } = location; 
            let {tab:nowTab="all"} = qs.parse(search.slice(1));
            return indexNavs.findIndex(item=>{       
                let {tab} = qs.parse(item.to.slice(2));
                return nowTab === tab;
            });
        }}
      />
      <IndexList />
  </div>
}

export default IndexPage;
