var socket = io();

socket.on("connect", function() {
  console.log("Connected to the server");

  socket.emit("createMessage", {
    from: "jen@example.com",
    text: "Hey. This is Andrew."
  });
});

socket.on("disconnect", function() {
  console.log("Disconnected from the server");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
});
