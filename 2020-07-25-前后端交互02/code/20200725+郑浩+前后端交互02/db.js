const mysql = require("mysql2/promise");

let connection;
module.exports = {
    async initDB() {
        connection = await mysql.createConnection({
            host: "127.0.0.1",
            password: "123456",
            user: "root",
            database: "WEB09",
        });
    },

    getDB() {
        return connection;
    },
};