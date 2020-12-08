export default function topics(topics = {
  loading: false,
  data:[],
  limit:10
}, action) {
  switch (action.type) {
    case "TOPICS_LOADING":
      return {
        ...topics,
        loading: true,
        data:[]
      }
    case "TOPICS_LOAD":
      return {
        ...topics,
        loading: false,
        data:action.data
      }
    case "TOPICS_LIMIT":
      return {
        ...topics,
        limit: action.limit
      }
  }
  return topics;
}



