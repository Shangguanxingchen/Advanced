export default function topics(topics = {}, action) {
  return topics;
}



/*
function reducer(state={
  topics:{
    loading:false,
    data: {}
  },
  user:{
    loading: false,
    data: {}
  }
},action) {
    switch (action.type) {
      case "TOPICS_LOADING":
          return {}
      case "TOPICS_LOAD":
          return {}
      case "USER_LOADING":
            return {}
      case "USER_LOAD":
            return {}
    }
}*/

// reducer 的拆分与合并
// function reducer(state={},action) {
//     return {
//       topics:topics(state.topics,action),
//       user:user(state.user,action)
//     }
// }

// function topics(topics = {
//   loading: false,
//   data: {}
// }, action) {
//   // action
//   return topics;
// }
// function user(user = {
//   loading: false,
//   data: {}
// }, action) {
//   // action
//   return user;
// }

// const reducer = combineReducers({
//   topics,
//   user
// });
