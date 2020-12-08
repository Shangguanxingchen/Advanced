import reqAjax from "./upload.js";

const loginBtn = document.querySelector("#loginBtn");
const unameIpt = document.querySelector("#uname");
const pwdIpt = document.querySelector("#pwd");

loginBtn.addEventListener("click", async () => {
  let username = unameIpt.value;
  let pwd = pwdIpt.value;
  let data = {
    username,
    pwd,
  }
  await reqAjax.onLogin(data);
});
