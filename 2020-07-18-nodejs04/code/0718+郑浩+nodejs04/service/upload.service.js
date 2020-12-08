const fs = require("fs");
const path = require("path");
const { uploadModel } = require("../model")

module.exports = {
    async addData(uname, age, img) {
        const imgName = createImgName(img);
        saveImg(img, imgName);
        const result = await insertToDb(uname, age, imgName);
        return result;
    }
};

async function insertToDb(uname, age, imgName) {
    const newsModel = {
        uname,
        age,
        imgUrl: "/upload/" + imgName,
    };
    const result = await uploadModel.create(newsModel);
    return result;
};

function createImgName(img) {
    return Date.now() + "_" + img.name;
};

function saveImg(img, imgName) {
    const readStream = fs.createReadStream(img.path);
    const uploadPath = path.resolve(__dirname, "../static/upload", imgName);
    const writeStream = fs.createWriteStream(uploadPath);
    readStream.pipe(writeStream);
};
