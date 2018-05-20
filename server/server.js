const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
var server = http.createServer(app);
const socketIO = require("socket.io");
var io = socketIO(server);
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit("newMessage", {
    from: "Umed Tolibi",
    text: "See you then",
    createdAt: 123
  });

  socket.on("createMessage", message => {
    console.log("createMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User was disconnected");
  });
});

server.listen(port, () => console.log(`Server is up on port: ${port}`));
