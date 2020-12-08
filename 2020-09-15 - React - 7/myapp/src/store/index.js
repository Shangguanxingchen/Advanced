import {combineReducers, createStore} from "redux";
import topics from "./reducers/topics";
import user from "./reducers/user";
export default createStore(combineReducers({
  topics,
  user
}));