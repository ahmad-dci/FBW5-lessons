const express = require('express')

const adminRouter = express.Router()

adminRouter.get('/addbook', (req, res) => {
    res.render('addbook');
})
adminRouter.post('/addbook', (req, res) => {
console.log(req.body);
console.log(req.files);


})
module.exports = adminRouter