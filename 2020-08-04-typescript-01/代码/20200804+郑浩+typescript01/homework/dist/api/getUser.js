// import axios from 'axios'
class Axios {
    get(url, query) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                let data = xhr.responseText;
                resolve(data);
            };
            xhr.open('get', url, true);
            xhr.send();
        });
    }
}
let axios = new Axios();
// getUser 在封装的过程中，并不清楚具体使用中会传入的参数类型是什么？
// 范型：为类型定义的参数
export function getUser(query) {
    return axios.get('/user', {
        query
    });
}
export function getUsers() {
    return new Promise(() => {
        //....
    });
}
