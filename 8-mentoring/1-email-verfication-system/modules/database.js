const connectionString = 'mongodb+srv://test2_user:!234qweR@cluster0-rmrmn.mongodb.net/test2?retryWrites=true&w=majority'
const mongoose = require('mongoose')
const passwordHash = require('password-hash')

const Schema = mongoose.Schema

const usersSchema = new Schema({
    fname: {
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    lname: {
        type: String,
        required: true,
        max: 50,
        min: 2
    },
    password: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 100,
        min: 5
    },
    verfied: {
        type: Boolean,
        required: true
    }
})
const Users = mongoose.model('users', usersSchema)

function connect() {
    return new Promise((resolve, reject) => {
        if(mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject()
            })
        }
    })
}

function register(fname, lname, password, email) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const newUser = new Users({
                fname,
                lname,
                password: passwordHash.generate(password),
                email,
                verfied: false
            })
            newUser.save().then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

module.exports = {
    register
}