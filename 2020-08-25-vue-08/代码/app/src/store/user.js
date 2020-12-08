import * as api from '@/api';

export default {
    // 模块中的state天生具有命名空间，需要通过模块名称去访问
    // mutations，actions 默认是全局的，如果需要命名空间，则需要手动添加一个属性
    namespaced: true,
    state: {
        user: null
    },

    mutations: {
        uploadUser(state, payload) {
            state.user = payload;
        }
    },

    actions: {
        async login(store, payload) {
            try {
                let rs = await api.login(payload);

                store.commit('uploadUser', rs.data);
    
                localStorage.setItem('user', JSON.stringify(rs.data));
                localStorage.setItem('token', rs.headers.authorization);
            } catch(e) {
                throw e;
            }
        }
    }
}