const { uploadService } = require("../service");

module.exports = {
    async index(ctx) {
        await ctx.render("/index");
    },

    async upload(ctx) {
        const { uname, age } = ctx.request.body;
        const { img } = ctx.request.files;
        const result = await uploadService.addData(uname, age, img);
        if (result.affectedRows > 0) {
            ctx.body = "success";
        }
    }
};