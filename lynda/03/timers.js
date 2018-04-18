
var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var percentWaiting = 0;

function writeWaitingPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function(){
    currentTime += waitInterval;
    percentWaiting = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaiting);
}, waitInterval);

setTimeout(function() {

    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n\n Done \n\n");
}, waitTime);


process.stdout.write("\n\n\n");
writeWaitingPercent(percentWaiting);
