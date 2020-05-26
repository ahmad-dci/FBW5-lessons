const http = require('http')
const fs = require('fs')


http.createServer((req, res) => {
    // res.writeHead(200, {'content-type': 'application/json'})
    // res.writeHead(200, {'content-type': 'text/plain'}) // send text data
     res.writeHead(200, {'content-type': 'text/html'}) // send html

     //send json text
    // let obj = {
    //     name: "ahmad",
    //     firstName: "osman"
    // }

    //res.end(JSON.stringify(obj))

    //send html text
    // let myHtml =
    //  '<html>'+
    // '<head>'+
    // '<title>my first server page</title>'+
    // '</head>'+
    // '<body>'+
    // '<h2>text</h2>'+
    // '</body>'+
    // '</html>';

    // res.end(myHtml);


    //send html text from file

    // reading file
    // fs.readFile('views/index.html', (err, data) => {
    //     //console.log(err);
    //     res.end(data);
    // })

    console.log(req.url);
    
    let text = fs.readFileSync('views/index.html');
    res.end(text);
    

}).listen(4000)


