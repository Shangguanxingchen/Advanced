const fs = require("fs");
const dataList = require("./data/data.json");
const cheerio = require("cheerio");

let pageSize = 5;
let currentPage;

module.exports = (p) => {
	currentPage = p || 1;
	const template = fs.readFileSync("./views/news.html");
	const $ = cheerio.load(template);
	$(".news-list").html(createNewsListInnerHtml());
	$(".pagination").html(createPagesInnerhtml());
	return $.html();
}

const createNewsItemHtml = (data) => {
	return `
		<li class="news">
            <a href="javascript:;">
                <img src=${data.imgUrl} alt="">
            </a>
            <div>
                <h3>
                    <a href="javascript:;">${data.title}</a>
                </h3>
                <div class="info">
                    <span class="tips"><span>${data.from}</span></span>
                    <!-- <span class="line"></span> -->
                    <span class="time">| &nbsp;&nbsp;${data.newTime}</span>
                </div>
            </div>
        </li>`;
};

const createNewsListInnerHtml = () => {
	let result = "";
	getCurrentPageDataList().forEach((item) => {
		result += createNewsItemHtml(item);
	});
	return result;
}

function createPagesInnerhtml() {
	let totalPage = Math.ceil(dataList.length/pageSize);
	const prevPage = Math.max(currentPage - 1, 1);
    const nextPage = Math.min(currentPage + 1, totalPage);

	let result = `<a href="/?p=${prevPage}" class="prev">⌜</a>`;
    for (let index = 1; index <= totalPage; index++) {
        result += `<a href="/?p=${index}">${index}</a>`;
    }
    result += `<a href="/?p=${nextPage}" class="next">⌝</a>`;

    return result;
}

function getCurrentPageDataList() {
	let start = (currentPage - 1) * pageSize;
	let end = start + pageSize;
	return dataList.slice(start,end);
}





