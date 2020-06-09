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

