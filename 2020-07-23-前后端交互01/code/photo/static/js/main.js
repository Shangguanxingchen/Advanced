// 前端逻辑
import PreviewImg from "./PreviewImg.js";
import { upload } from "./upload.js";

const imgFile = document.querySelector(".imgFile");
const imgFileAdd = document.querySelector(".imgFile-add");
const showContainer = document.querySelector(".showContainer");
const loadContainer = document.querySelector(".loadContainer");
const uploadBtn = document.querySelector(".uploadBtn");

let uploadImgList = [];
uploadBtn.addEventListener("click", async () => {
  // 上传图片到服务器

  // forEach 不等待 await
  // uploadImgList.forEach(async (previewImg) => {
  //   await upload(previewImg);
  // });
  for (const previewImg of uploadImgList) {
    await upload(previewImg);
  }
  // 上传完成了
  uploadCompleted();
});

function uploadCompleted() {
  reset();
}

function reset() {
  hideLoadContainer();
  uploadImgList = [];
  document.querySelector(".wantUpload").innerHTML = ``;
}

imgFileAdd.addEventListener("change", (e) => {
  renderPreviewImg(e.target.files);
});

imgFile.addEventListener("change", (e) => {
  renderPreviewImg(e.target.files);
});

function renderPreviewImg(files) {
  const fileList = Array.from(files);

  fileList.forEach((file) => {
    const previewImg = new PreviewImg(file);
    uploadImgList.push(previewImg);
  });

  showLoadContainer();
}

function showLoadContainer() {
  showContainer.style.display = "none";
  loadContainer.style.display = "block";
}

function hideLoadContainer() {
  showContainer.style.display = "block";
  loadContainer.style.display = "none";
}
