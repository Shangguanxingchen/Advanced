const { getDB } = require("../db");
module.exports = {
    async create({ uname, age, imgUrl }) {
        const sql =
            "INSERT INTO users (id,uname,age,imgUrl) VALUES (0,?,?,?)";

        const [result] = await getDB().execute(sql, [uname, age, imgUrl]);
        return result;
    },
};