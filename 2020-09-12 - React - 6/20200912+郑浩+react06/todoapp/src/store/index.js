import { createStore } from "redux";
const reducer = (state = {
    data: [{
        id: 1,
        title: "今天晚上升颗星",
        done: true
    }, {
        id: 2,
        title: "本周给大家录10集补充知识",
        done: false
    }]
}, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: Date.now(),
                        title: action.title,
                        done: false
                    }
                ]
            }
        case 'DELETE_MESSAGE':
            return {
                ...state,
                data: action.id ? state.data.filter(item => item.id !== action.id) : state.data.filter(item => !item.done)
            }
        case 'CHANGEDONE_MESSAGE':
            state.data.forEach(item => {
                if (item.id === action.id) {
                    item.done = action.done
                }
            })
            return {
                ...state,
                data: [
                    ...state.data,
                ]
            }
        case 'EDIT_MESSAGE':
            const data = state.data.filter(item => {
                if(item.id === action.id) {
                    item.title = action.val
                }
                return item;
            })
            return {
                ...state,
                data: [
                    ...state.data,
                ]
            }
        default:
            return state
    }
}
const store = createStore(reducer);
export default store;