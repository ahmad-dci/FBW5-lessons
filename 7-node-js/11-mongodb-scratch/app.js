const express = require('express')
// const MongoClient = require('mongodb').MongoClient
const { MongoClient } = require('mongodb')

const app = express()
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0-rmrmn.mongodb.net/test1?retryWrites=true&w=majority'
app.get('/', (req, res) => {
    res.send('welcom to mongodb');
});

app.get('/connect', (req, res) => {
    //open connection to mongodb
    MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(client =>{
        console.log(client)
        res.send('connected');
    }).catch(error => {
        console.log(error);
        res.send('couldnot connect');
    })
    
});



app.get('/adduser', (req, res) => {
    // connect to mongodb server
    MongoClient.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true} ).then(client => {
        // get the database 
        const db = client.db('test1')
        // insert data to a collection 
        db.collection('users').insertOne({
            title: 'some book',
            category: 'java'
        }).then(response => {
            console.log(response);
            res.send(response);
            client.close()
        }).catch(error => {
            console.log(error);
            res.send(error);
            client.close()
        })
        
    }).catch(error => {
        res.send('can not connect');
    })
    
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});