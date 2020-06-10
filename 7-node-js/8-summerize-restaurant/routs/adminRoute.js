const express = require('express')
const fs = require('fs')

function adminBurgerRouter(myMeals){
    const adminRoute = express.Router()

    adminRoute.get('/addmeal', (req, res) => {
        // const jsonText = fs.readFileSync(__dirname + '/meals.json')
        // const myMeals = JSON.parse(jsonText)
        res.render('adminAddMeal', {meals: myMeals})
    });

    adminRoute.get('/deletmeal', (req, res) => {
        res.render('adminDeletMeal', {meals: myMeals})
    });

    adminRoute.post('/deletmeal', (req, res) => {
        //console.log(req.body.mealid)
        const idx = req.body.mealid
        myMeals.splice(idx, 1)
        fs.writeFileSync('./meals.json', JSON.stringify(myMeals))
        

        res.sendStatus(200)
    })
    adminRoute.get('/editmeal', (req, res) => {
        res.render('adminEditMeal', {meals: myMeals})
    })
    adminRoute.post('/editmeal', (req, res) => {
        console.log(req.body)
        myMeals[req.body.mealid].title = req.body.mealTitle
        myMeals[req.body.mealid].description = req.body.mealDescription
        myMeals[req.body.mealid].price = req.body.mealPrice
        fs.writeFileSync('./meals.json', JSON.stringify(myMeals))
        res.sendStatus(200)
    })

    adminRoute.post('/addmeal', (req, res) => {
        const mealTitle = req.body.mealTitle
        const mealPrice = req.body.mealPrice
        const mealDescription = req.body.mealDescription
    
        let obj = {
            title: mealTitle,
            description: mealDescription,
            imgUrl: "/img/burger/4.png",
            price: mealPrice
        }
        myMeals.push(obj)
        fs.writeFileSync('./meals.json', JSON.stringify(myMeals))
        //res.render('adminAddMeal', {meals: meals})
        // you need to write the full path on res.redirect
        res.redirect('/admin/addmeal')
    
    });
    return adminRoute
}


module.exports = {
    adminBurgerRouter
}

