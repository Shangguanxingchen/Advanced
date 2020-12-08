const Koa = require("koa");
const serve = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body");
const fs = require("fs");
const path = require("path");
const { initDB, getDB } = require("./db");
initDB();

const app = new Koa();
app.use(
  koaBody({
    multipart: true,
  })
);
app.use(serve(__dirname + "/static"));
const router = new Router();

router.post("/upload", async (ctx) => {
  const { img } = await ctx.request.files;
  const imgName = Date.now() + "_" + img.name; 
  const uploadPath = "/upload/" + imgName;
  ctx.body = img;
  saveImgsToLocal(img,imgName);
  await insertToDB(uploadPath);
});

function saveImgsToLocal(img,imgName) {
  const readStream = fs.createReadStream(img.path);
  const uploadPath = path.resolve(__dirname, "./static/upload", imgName);
  const writeStream = fs.createWriteStream(uploadPath);
  readStream.pipe(writeStream);
};

async function insertToDB(imgUrl) {
  const sql = "INSERT INTO photos (id,imgUrl) VALUES (0,?)";
  const [result] = await getDB().execute(sql, [imgUrl]);
  return result;
};

router.post("/getPhotos", async (ctx) => {
  ctx.body = await getDataFromDb();
});

async function getDataFromDb() {
  const sql = `SELECT * FROM photos `;
  const [rows] = await getDB().execute(sql);
  return rows;
};

app.use(router.routes());
app.listen(8080);
