const express = require('express')
// const MongoClient = require('mongodb').MongoClient
// const ObjectID = require('mongodb').ObjectID
// or destructuring
const { MongoClient, ObjectID } = require('mongodb')

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
    // connect node js to mongodb server or cluster
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


app.get('/adduserasync', (req, res) => {

    // other code 
    // iffie (async ()=>{ your code })()
   (async ()=>{
       try {
        const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
        const db = client.db('test1')
        const response = await db.collection('users').insertOne({
            email: 'bla@bla.bla',
            password: '123456'
        })
        client.close()
        res.send(response);
       } catch (error) {
           res.send(error);
       }
       
   })()
});

app.get('/insertmany', (req, res) => {
    (async ()=>{
        try {
         const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
         const db = client.db('test1')
         const response = await db.collection('users').insertMany([
             {
             email: 'bla@bla.bla',
             password: '123456'
         },
         {
            email: 'bla@bla.bla1',
            password: '123456'
        },
        {
            email: 'bla@bla.bla2',
            password: '123456'
        },
        {
            email: 'bla@bla.bla3',
            password: '123456'
        },
        ])
         client.close()
         res.send(response);
        } catch (error) {
            res.send(error);
        }
        
    })()
});

app.get('/getusers', (req, res) => {
    (async ()=>{
        try {
         const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
         const db = client.db('test1')
         const response = await db.collection('users').find().toArray()
         //console.log(response);
         
         client.close()
         res.send(response);
        } catch (error) {
            res.send(error);
        }
        
    })()
});
app.get('/findone', (req, res) => {
    (async ()=>{
            try {
                const client =  await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
                const db = client.db('test1')
                const response = await db.collection('users').findOne({_id: new ObjectID('5efc575b6224502c8adead59')})
                client.close()
                res.send(response);
            } catch (error) {
                res.send(error);
            }
            

    })()
});

app.get('/updatemany', (req, res) => {
    (async ()=>{
        try{
            const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
            const db = client.db('test1')
            const response = await db.collection('users').updateMany({password: '123456'},{
                $set: {email: 'asd@asd.asd'}
            })
            client.close()
            res.send(response);
        } catch(error){
            res.send(error);
        }
    })()
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});