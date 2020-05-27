const http = require('http')
const fs = require('fs')

http.createServer(function(req, res){
console.log(req.url);
switch (req.url) {
    case '/home':
        res.writeHead(200,{'content-type': 'text/html'})
        let text = fs.readFileSync('views/index.html')
        //res.end("<h2>Welcome Home</h2>")
        res.end(text)
        break;
    case '/about':
        res.writeHead(200,{'content-type': 'text/html'})
        res.end("<h2>about me</h2>")
        break;
    case '/somecss':
        res.writeHead(200,{'content-type': 'text/css'})
        res.end("body{background-color:red;}")
        break;
    case '/somejson':
        res.writeHead(200,{'content-type': 'application/json'})
        res.end("{'name': 'Ahmad', 'firstName': 'Osman'}")
        break;
    default:
        res.writeHead(404,{'content-type': 'text/html'})
        res.end("<h2>404 page is not found</h2>")
        break;
}
}).listen(4500)