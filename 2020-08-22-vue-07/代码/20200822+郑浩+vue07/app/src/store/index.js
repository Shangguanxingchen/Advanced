import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        userInfo: null
    },
    getters: {
        userInfo: (state) => {
            if(state.userInfo == null) {
                state.userInfo = JSON.parse(localStorage.getItem('userInfo'));
            }
            return state.userInfo;
        }
    },
    mutations: {
        getUserInfo: (state, payload) => {
            state.userInfo = payload;
            localStorage.setItem('userInfo', JSON.stringify(payload));
        }
    }
});

export default store;