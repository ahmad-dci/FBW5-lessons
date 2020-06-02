const express = require('express');
const app = express();

// route / root of the domain
app.get('/', (req, res) => {
    //res.send("Hello FBW5");
    res.sendFile(__dirname+'/home.html')
})

// route /about
app.get('/about', (req, res) => {
    res.send(__dirname);
});

app.get('/contact', (req, res) => {
    res.send('contact me');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

