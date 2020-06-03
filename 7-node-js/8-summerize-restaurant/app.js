const express = require('express');

const app = express();

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/home/subhome', (req, res) => {
    res.render('main');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});