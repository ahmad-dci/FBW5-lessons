const http = require('http')
const fs = require('fs')
const url = require('url')

// import our module
const saver = require('./modules/saver')

http.createServer((req, res)=>{
let q = url.parse(req.url, true)

switch (q.pathname) {
    case '/':
        let indexHtml = fs.readFileSync('views/26-HTML-CSS-Summerize/index.html')
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(indexHtml)
        break;
    case '/css/index.css':
        let indexCss = fs.readFileSync('views/26-HTML-CSS-Summerize/css/index.css')
        res.writeHead(200, {'content-type': 'text/css'})
        res.end(indexCss)
        break;
    case '/img/Logo.png':
        let indexLogo = fs.readFileSync('views/26-HTML-CSS-Summerize/img/Logo.png')
        res.writeHead(200, {'content-type': 'image/png'})
        res.end(indexLogo)
        break;
    case '/img/hero.jpg':
        let indexBanner = fs.readFileSync('views/26-HTML-CSS-Summerize/img/hero.jpg')
        res.writeHead(200, {'content-type': 'image/jpeg'})
        res.end(indexBanner)
        break;
    case '/contact':
        //saver.saveContent("Hello I am a content", 'content.txt')
        if(q.query.name){
            let message = q.query.name + '\n' + q.query.subject + '\n' + q.query.message + '\n' 
            saver.saveContent(message , 'content.txt')
        }
        let contactContent = fs.readFileSync('views/26-HTML-CSS-Summerize/contact.html')
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(contactContent)
        break
    default:
        res.writeHead(404, {'content-type': 'text/html'})
        res.end("404 no page founded")
        break;
}
}).listen(4400)