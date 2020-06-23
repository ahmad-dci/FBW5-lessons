const express = require('express')

const adminRouter = express.Router()

adminRouter.get('/addbook', (req, res) => {
    res.render('addbook');
})

module.exports = adminRouter