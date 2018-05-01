const http = require("http");

http.createServer((req, res) => {
    let body = [];

    request.on("data", (chunk) => {
        body.push(chunk)
    }).on('end', () => {
      body = Buffer.concat(body).toString()

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')

      res.write(JSON.stringify(resBody))
      res.end()
    })
}).listen(8080);
console.log(process.stdout);
