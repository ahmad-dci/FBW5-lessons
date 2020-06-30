const express = require('express')

const app = express()
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0-rmrmn.mongodb.net/test1?retryWrites=true&w=majority'
app.get('/', (req, res) => {
    res.send('welcom to mongodb');
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});