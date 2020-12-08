import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';

Vue.use( Vuex );

// 构建仓库
let store = new Vuex.Store({

    modules: {
        // 模块中的state天生具有命名空间，需要通过模块名称去访问
        userModule: user
    }
});



export default store;

