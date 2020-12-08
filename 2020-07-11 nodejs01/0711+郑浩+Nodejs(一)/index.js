const http = require("http");
const fs = require("fs");
const news = require("./news");
const mime = require("./data/mime.json");
const path = require("path");
const url = require("url");

const server = http.createServer((req, res) => {
	const { pathname, query } = url.parse(req.url, true);
	//console.log(url.parse(req.url))
	res.setHeader("content-type", "text/html; charset=utf-8");
	if (pathname === "/") {
		//const template = fs.readFileSync("./view/news.html");
		const p = +query.p;
		res.end(news(p));
	} else if (pathname === "/home") {
		const template = fs.readFileSync("./views/home.html");
		res.end(template);
	} else if (pathname === "/detail") {
		// const template = fs.readFileSync("./views/detail.html");
		// res.end(template);

		//流
		const readStream = fs.createReadStream("./views/detail.html");
		readStream.pipe(res);
	} else {
		if (req.url.includes("favicon.ico")) return;
		const extname = path.extname(req.url);
		const mimeType = mime[extname];
		res.setHeader("content-type", `${mimeType}; charset=utf-8`);
		const file = fs.readFileSync("./static/" + req.url);
		res.end(file);
	}
})

server.listen(8080);