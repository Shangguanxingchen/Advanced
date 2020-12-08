import { useDispatch, useSelector } from "react-redux";
import http from "../http";

// 建立一个自定义 hooks，返回一个方法用于请求 topics 的数据，并将数据更新至 store 中
function useTopics() {
    const dispatch = useDispatch();
    return (page,tab,limit)=>{
      dispatch({
        type: "TOPICS_LOADING"
      });
      http.get(`/topics?page=${page}&tab=${tab}&limit=${limit}`)
      .then((res)=>{
        dispatch({
          type: "TOPICS_LOAD",
          data: res.data.data
        }); 
      })
    }
}

export {useTopics}