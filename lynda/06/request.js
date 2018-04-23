const https = require("https");
var fs = require("fs");

var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
};

var req = https.request(options, function(res) {

    var responceBody = "";

    console.log("Responce from server started");
    console.log(`Server Status: ${res.statusCode} `);
    console.log("Responce Headers: %j", res.headers);

    res.setEncoding("UTF-8");
    res.once("data", function(chunk) {
        console.log(chunk);
    });

    res.on("data", function(chunk){
        console.log(`--chunk-- ${chunk.length}`);
        responceBody += chunk;
    });
    res.on("end", function() {
        fs.writeFile("George_Washington.html", responceBody, function(err) {
            if(err) {
                throw err;
            }
            console.log("File Downloaded");
        });
    });
});

req.on("error",function(err){
    console.log(`problem with request: ${err.message}`);
});

req.end();
