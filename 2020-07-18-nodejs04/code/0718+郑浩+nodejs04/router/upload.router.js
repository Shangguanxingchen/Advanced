const Router = require("koa-router");
const router = new Router();
const { uploadController } = require("../controller");

router.get("/", uploadController.index);
router.post("/upload", uploadController.upload);

module.exports = router;