const Koa = require("koa");
const { uploadRouter } = require("./router");
const static = require("koa-static");
const views = require("koa-views");
const koaBody = require("koa-body");
const { initDB } = require("./db");
initDB();

const app = new Koa();

app.use(static(__dirname + "/static"));
app.use(views(__dirname + "/views"), {
    extension: "html",
});
app.use(
    koaBody({
        multipart: true,
    })
);
app.use(uploadRouter.routes());

app.listen(8080);