// 前端逻辑
import PreviewImg from "./PreviewImg.js";
import { upload, uploadData } from "./upload.js";

const imgFile = document.querySelector(".imgFile");
const imgFileAdd = document.querySelector(".imgFile-add");
const showContainer = document.querySelector(".showContainer");
const loadContainer = document.querySelector(".loadContainer");
const uploadBtn = document.querySelector(".uploadBtn");

let uploadImgList = [];

imgFileAdd.addEventListener("change", (e) => {
  renderPreviewImg(e.target.files);
});

imgFile.addEventListener("change", (e) => {
  renderPreviewImg(e.target.files);
});

uploadBtn.addEventListener("click", async () => {
  for (const previewImg of uploadImgList) {
    await upload(previewImg);
  }
  // 上传完成了
  uploadCompleted();
  //渲染图片列表
  const imgsList = await uploadData();
  renderTable(imgsList);
});

function renderTable(imgsList) {
  imgsList.forEach((img) => {
    const div = document.createElement("div");
    div.classList.add("photoItem");
    div.innerHTML = `
    <img src="${img.imgURL}" />
    <span>
      ${img.id}
    </span>
  `;
    document.querySelector(".photoContainer").appendChild(div);
  })
};

function uploadCompleted() {
  reset();
};

function reset() {
  hideLoadContainer();
  uploadImgList = [];
  imgFile.value = "";
  imgFileAdd.value = "";
  document.querySelector(".photoContainer").innerHTML = ``;
  document.querySelector(".wantUpload").innerHTML = ``;
  document.querySelector(".masking").style.display = "none";
};

function renderPreviewImg(files) {
  const fileList = Array.from(files);
  fileList.forEach((file) => {
    const previewImg = new PreviewImg(file);
    uploadImgList.push(previewImg);
  });
  showLoadContainer();
};

function showLoadContainer() {
  showContainer.style.display = "none";
  loadContainer.style.display = "block";
};

function hideLoadContainer() {
  showContainer.style.display = "block";
  loadContainer.style.display = "none";
};
