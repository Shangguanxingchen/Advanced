// socket.io
const Koa = require("koa");
const http = require("http");
const serve = require("koa-static");
const users = require("./users");
const moment = require("moment");

const app = new Koa();
app.use(serve("./static"));

const server = http.createServer(app.callback());
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("joinChatRoom", (data) => {
    const { username, room } = data;
    // 存储了加入聊天的用户
    users.addUser(socket.id, data);
    //用户进来的时候
    // 当前用户收到  欢迎加入聊天室
    // 指定 room
    socket.join(room);
    io.to(room).emit("message", {
      username: "开课吧",
      datatime: getDate(),
      msg: "欢迎加入聊天室",
    });

    // 其他用户收到  xx 加入聊天室
    // socket.to(room)
    socket.to(room).broadcast.emit("message", {
      username: "开课吧",
      datatime: getDate(),
      msg: `${username} 加入聊天室`,
    });
  });

  socket.on("disconnect", () => {
    // 通过 id
    const userInfo = users.findUser(socket.id);

    if (userInfo) {
      const { username,room } = userInfo;
      socket.join(room);
      // 其他用户收到  xx 离开聊天室
      io.to(room).broadcast.emit("message", {
        username: "开课吧",
        datatime: getDate(),
        msg: `${username} 离开聊天室`,
      });
    }
  });

  socket.on("chatMessage", (data) => {
    // 通过 id
    const userInfo = users.findUser(socket.id);
    if (userInfo) {
      const { username,room } = userInfo;
      socket.join(room);
      // 通知所有的连接用户
      // 获取到用户名
      io.to(room).emit("message", {
        username,
        datatime: getDate(),
        msg: data,
      });
    }
  });
});

function getDate() {
  return moment().format("h:mm A");
};

server.listen(3000);
