const express = require('express')
const fs = require('fs')

const dataModule = require('./modules/mongooseDataModule')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const port = process.env.PORT || 5000


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
    console.log(req.body);
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


app.use('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/index.html' , 'utf-8')
    res.send(html);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
