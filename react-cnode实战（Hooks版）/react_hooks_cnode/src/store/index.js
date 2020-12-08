import { createStore, combineReducers } from 'redux';
import topics from './reducer/topic_reducer';

export default createStore(combineReducers({
    topics,
}));