const express = require('express')
const session = require('express-session')
const fileupload = require('express-fileupload')
const cookie = require('cookie-parser')
const fs = require('fs')

const app = express()
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const sessionOptions = {
    secret: 'bookStore',
    cookie: {}
}
app.use(session(sessionOptions))
app.use(cookie())

app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))

app.get('/', (req, res) => {
    res.render('main')
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});