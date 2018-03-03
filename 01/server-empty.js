const {Server} = require("http");

const server = new Server();

const emit = server.emit;

server.emit = (...args) => {
    console.log(args[0]);

    return emit.apply(server, args);
};
server.on("request", (req, res) => {
    if(req.url === "/") {
        res.end("hello, world !");
    }
});

server.listen(8000);
