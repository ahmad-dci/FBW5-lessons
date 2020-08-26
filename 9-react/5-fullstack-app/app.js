const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});


