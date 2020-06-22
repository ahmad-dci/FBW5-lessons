const express = require('express')
const session = require('express-session')
const fileupload = require('express-fileupload')
const cookie = require('cookie-parser')
const fs = require('fs')

// include dataModule
const dataModule = require('./modules/dataModule')

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

app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/register', (req, res) => {
    // your post register handler here
    // console.log(req.body)
    // 2 data error
    // 1 user registered successfuly
    // 3 user is exist
    // 4 server error
    const email = req.body.email.trim()
    const password = req.body.password
    const repassword = req.body.repassword
    if (email && password && password == repassword){
        dataModule.registerUser(email, password).then(() => {
            res.json(1)
        }).catch(error => {
            console.log(error);
            if (error == "exist") {
                res.json(3)
            } else {
                res.json(4)
            }
        })
    } else{
            res.json(2)
        }
    
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});