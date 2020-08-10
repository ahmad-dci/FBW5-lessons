const express = require('express')
const path = require('path')

const app = express()

// set the public folder url 
app.use(express.static(path.join(__dirname, 'public')))

// set view engine and views path
app.set('view engine', 'ejs')
app.set('views', 'views');

app.get('/', (req, res) => {
    //res.send('Hello World');
    //res.send('Hi again');
    res.render('register');
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

// client side validation
// all inputs are filled
// password must match the repassword
// user must check the term of services check box
// if any of these roles is not valid, alert should be shown with the error message