// 前端逻辑
const socket = io("ws://localhost:3000");
// send emit 发送
// on 接收消息

// 1. 获取到点击的按钮
const sendBtn = document.querySelector("#sendBtn");
const msgInput = document.querySelector("#msg");

const urlSearchParams = new URLSearchParams(location.search);
const username = urlSearchParams.get("username");
const room = urlSearchParams.get("room");
// 登录
socket.emit("joinChatRoom", {
  username,
  room,
});

sendBtn.onclick = () => {
  // 把值发送给后端
  socket.emit("chatMessage", msgInput.value);
  msgInput.value = "";
  return false;
};

socket.on("message", (data) => {
  // 渲染data
  const { msg, username, datatime } = data;
  const messageDiv = document.createElement("div");

  messageDiv.classList.add("message");
  messageDiv.innerHTML = `<p class="meta">${username}<span>${datatime}</span></p><p>${msg}</p>`;

  const container = document.querySelector(".chat-messages");
  container.appendChild(messageDiv);
});
