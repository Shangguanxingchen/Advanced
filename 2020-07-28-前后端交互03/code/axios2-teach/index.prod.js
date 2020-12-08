const Koa = require("koa");

const Router = require("koa-router");

const serve = require("koa-static");

const koaBody = require("koa-body");

const app = new Koa();

app.use(serve(__dirname + "/static"));

app.use(
  koaBody({
    multipart: true,
  })
);

const router = new Router();
router.post("/login", (ctx) => {
  // 验证账号和密码
  const { username, password } = ctx.request.body;

  if (username === "h" && password === "123") {
    // 成功
    // token
    const token = jwt.sign({ uId: 1 }, secret, {
      expiresIn: "2h",
    });

    ctx.body = {
      state: 1,
      msg: "login success",
      data: {
        token,
      },
    };
  } else {
    // 失败
    ctx.body = {
      state: 0,
      msg: "login fail",
      data: {},
    };
  }
});
router.get("/getData", (ctx) => {
  ctx.body = "get - data - prod";
});
app.use(router.routes());

app.listen(8081, () => {
  console.log("open server localhost:8081");
});
