export function upload(previewImg) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("img", previewImg.getFile());
    // 图片上传到 server
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/upload");
    xhr.onload = () => {
      const img = resolve(JSON.parse(xhr.response));
      //saveImgsToLocal(img);
    };
    xhr.upload.onprogress = (e) => {
      //console.log(e.loaded, e.total);
      // 显示上传进度
      previewImg.updateProgress(e.loaded, e.total);
    };
    xhr.send(formData);
  });
};

export function uploadData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/getPhotos", true);
    xhr.onload = () => {
      const imgsList = resolve(JSON.parse(xhr.response));
    };
    xhr.send();
  });
};
