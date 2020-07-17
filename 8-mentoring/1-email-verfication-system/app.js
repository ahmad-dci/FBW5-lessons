const express = require('express')
const path = require('path')

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/register', (req, res) => {
    res.render('register')
});
app.post('/register', (req, res) => {
    console.log(req.body);
    res.json(1)
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

// register page fiels
// first name
// last name
// password
// repassword
// email
// 