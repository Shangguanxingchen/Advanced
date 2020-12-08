const Koa = require("koa");
const Router = require("koa-router");
const mysql = require("mysql2/promise");

const app = new Koa();
const router = new Router();

(async () => {
    const connection = await mysql.createConnection({
        user: "root",
        password: "123456",
        database: "WEB09"
    });

    router.get("/addUser", async (ctx) => {
        const sql = `INSERT INTO users (id, username, age) VALUES (0, ?, ?)`;
        const { username, age } = ctx.query;
        const [rows] = await connection.execute(sql, [username, age]);
        if(rows.affectedRows > 0) {
            ctx.body = "success";
        } else {
            ctx.body = "fail"; 
        }
    });
})();

app.use(router.routes());
app.listen(8080);



