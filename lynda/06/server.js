var http = require("http");

var server = http.createServer(function(req, res){

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>HTML Responce</title>
            </head>
                <h1>Serving HTML</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            <body>
            </body>
        </html>
      `);
});

server.listen(3000);

console.log("Server is running on 3000");
