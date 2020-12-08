const newsDataList = require("../data/data.json");
module.exports = async(ctx) => {
    let currentId = +ctx.query.id;
    console.log(ctx.query)
    await ctx.render("detail",{
        newsData: getCurrentNewsDataById(currentId)
    })
};
function getCurrentNewsDataById(id) {
    return newsDataList.find((data) => data.id == id);
}