const fs = require('fs')

function registerUser(email, password) {
    // your code here
    // read users.json and convert it to object
    return new Promise((resolve, reject) => {
      const readData = fs.readFileSync('./users.json')
      const data = JSON.parse(readData)

      // check user email is exist or not using es6 find array method
      const existUser = data.users.find(user => user.email == email) 
      if (existUser) {
        reject('exist')
      } else {
        data.users.push({
          id: data.newId,
          email: email,
          password: password
        })
        // increas the newid property for data to be used for next registered user
        data.newId++
        // convert data to json and write it in users.json
        fs.writeFileSync('./users.json', JSON.stringify(data))
        resolve()

      }


    })

  }

function addBook(bookTitle, bookDescription, bookPdf, bookImgs) {

  }

  module.exports = {
    registerUser,
    addBook
  }