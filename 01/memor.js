
var EventEmitter = require('events').EventEmitter;

var db = new EventEmitter();


function Request() {
    var self = this;

    this.bigData = new Array(1e6).join("*");

    this.send = function (data) {
        console.log(data);
    };

    this.onError = function(){
        self.send("Sorry");
    };
}

setInterval(function() {
    var request = new Request();
    console.log(process.memoryUsage().heapUsed);
}, 200);
