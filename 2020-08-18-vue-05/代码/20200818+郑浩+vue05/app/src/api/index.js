import axios from 'axios';

// 方便后期的维护和管理
const BASEURL = '/api';
const APIURL = {
    item: {
        getItems: BASEURL + '/items',
    },
    login: BASEURL + '/login',
    register: BASEURL + '/register'
}

export async function getItems() {
    return await axios({
        url: APIURL.item.getItems
    });
}
export async function login(params) {
    return await axios({
        url: APIURL.login,
        method: "post",
        data: params
    });
}
export async function register(params) {
    return await axios({
        url: APIURL.register,
        method: "post",
        data: params
    });
}