const express = require('express')

// require mongoose
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to Mongoose');
})
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});