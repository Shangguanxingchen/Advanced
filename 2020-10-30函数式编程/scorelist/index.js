const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const studentData = require("./data.json")
const app = new Koa();
const router = new Router();
app.use(static(__dirname+"/static/"))
router.get("/",ctx=>{
    ctx.body = "some value...";
})
router.get("/studentList",ctx=>{
    ctx.body = studentData
})
app.use(router.routes());
app.listen(8989);
// let arr = [
//     {
//         id: 1,
//         name: '小明',
//         age: 24,
//         gender: '男',
//         score:80
//     },
//     {
//         id: 2,
//         name: '小芳',
//         age: 30,
//         gender: '女',
//         score:84
//     },
//     {
//         id: 3,
//         name: '小美',
//         age: 31,
//         gender: '女',
//         score:76
//     },
//     {
//         id: 4,
//         name: '小刚',
//         age: 21,
//         gender: '男',

//     },
//     {
//         id: 5,
//         name: '小琪',
//         age: 18,
//         gender: '女'
//     }
// ]
// const fs = require("fs");
// fs.writeFileSync("./data.json",JSON.stringify(arr));