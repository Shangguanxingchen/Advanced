const mysql = require("mysql2/promise");

(async () => {
    const connection = await mysql.createConnection({
        user: "root",
        password: "123456",
        database: "WEB09"
    });

    const sql = `INSERT INTO users (id, name, age) VALUES (21, ?, ?)`
    const age = 99;
    const name = "xiaoheihei2"
    const results = await connection.execute(sql, [name, age]);
    ctx.body = results;
})();
