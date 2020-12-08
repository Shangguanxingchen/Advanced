const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/getData", (ctx) => {
    ctx.body = {"name": "koa"};
});

app.use(router.routes());
app.listen(8080);