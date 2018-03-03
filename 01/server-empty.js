const {Server} = require("http");


const server = new Server();

server.on("request", (req, res) => {
  // empty
    res.end("hello");
});

server.listen(8000);
