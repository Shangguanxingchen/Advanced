const Koa = require("koa");
const serve = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const koaJwt = require("koa-jwt");
const secret = "13579qwert";
const { initDB, getDB } = require("./db");
initDB();

const app = new Koa();
app.use(
  koaBody({
    multipart: true,
  })
);
app.use(serve(__dirname + "/static"));
app.use(
  koaJwt({
    secret,
  }).unless({
    path:[/^\/login/]
  })
);
const router = new Router();

router.post("/upload", async (ctx) => {
  const { img } = await ctx.request.files;
  const imgName = Date.now() + "_" + img.name; 
  const uploadPath = "/upload/" + imgName;
  const uId = ctx.state.user.uId;
  ctx.body = img;
  saveImgsToLocal(img,imgName);
  await insertToDB(uploadPath,uId);
});
function saveImgsToLocal(img,imgName) {
  const readStream = fs.createReadStream(img.path);
  const uploadPath = path.resolve(__dirname, "./static/upload", imgName);
  const writeStream = fs.createWriteStream(uploadPath);
  readStream.pipe(writeStream);
};
async function insertToDB(imgUrl,uId) {
  const sql = "INSERT INTO photos (id, uId, imgUrl) VALUES (0,?,?)";
  const [result] = await getDB().execute(sql, [uId,imgUrl]);
  return result;
};

router.post("/getPhotos", async (ctx) => {
  const uId = ctx.state.user.uId;
  const imgsList = await getDataFromDb(uId);
  ctx.body = {
    state: 1,
    msg: "登录成功",
    data: {
      imgsList,
    },
  }
  //ctx.body = await getDataFromDb();
});
async function getDataFromDb(uId) {
  const sql = `SELECT * FROM photos WHERE uId=?`;
  const [rows] = await getDB().execute(sql, [uId]);
  return rows;
};

router.post("/login",async (ctx) => {
  let usersList = await getUsersInfo();
  let {username, pwd} = JSON.parse(ctx.request.body);
  let user = usersList.find((user) => {
    return user.username == username && user.password == pwd
  })
  if(user) {
    const token = jwt.sign({ uId: user.uId }, secret, {
      expiresIn: "2h",
    });
    ctx.body = JSON.stringify({
      state: 1,
      msg: "login success",
      data: {
        token,
      },
    })
  }else {
    ctx.body = JSON.stringify({
      state: 0,
      msg: "账号或密码错误,请重新输入!",
      data: {},
    })
  }
});
async function getUsersInfo() {
  const sql = `SELECT * FROM users`;
  const [rows] = await getDB().execute(sql)
  return rows;
};

app.use(router.routes());
app.listen(8080);
