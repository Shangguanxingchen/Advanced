function upload(previewImg) {
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
    const token = localStorage.getItem("token");
    xhr.setRequestHeader("Authorization", token);
    xhr.send(formData);
  });
};

function uploadData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/getPhotos", true);
    xhr.onload = () => {
      let res = JSON.parse(xhr.response);
      //console.log(res.data.imgsList);
      const imgsList = resolve(res.data.imgsList);
    };
    const token = localStorage.getItem("token");
    xhr.setRequestHeader("Authorization", token);
    xhr.send();
  });
};

function onLogin(data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/login", true);
    xhr.onload = () => {
      //const res = resolve(JSON.parse(xhr.response));
      const res = JSON.parse(xhr.response);
      localStorage.setItem("token", "Bearer " + res.data.token);
      if(res.state == 1) {
        location.href = "photo.html";
      }else {
        alert(res.msg);
      }
    };
    xhr.send(JSON.stringify(data));
  });
};

export default {
  upload,
  uploadData,
  onLogin,
};
