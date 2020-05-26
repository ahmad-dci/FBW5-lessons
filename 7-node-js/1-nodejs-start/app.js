const http = require('http')

http.createServer((req, res) => {
    // res.writeHead(200, {'content-type': 'application/json'})
     //res.writeHead(200, {'content-type': 'text/plain'}) // send text data
     res.writeHead(200, {'content-type': 'text/html'}) // send html
    let obj = {
        name: "ahmad",
        firstName: "osman"
    }

    //res.end(JSON.stringify(obj))
    res.end("<h2>text</h2>");
}).listen(4000)


