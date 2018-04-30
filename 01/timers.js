const fs = require("fs");

fs.open(__filename, 'r', (ree, fd) => {
    console.log("IO");
});

setTimeout(() => {
    console.log("Immediate");
});

process.nextTick(() => {
    console.log("nextTick");
});

new Promise(resolve => {
  resolve("promise");
}).then(console.log);

console.log('Start!!');
v
