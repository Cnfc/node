
const fn = require("./mod");

const { Server } = require("http");


const server = new Server(fn);

server.listen(8000);
