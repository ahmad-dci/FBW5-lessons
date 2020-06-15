const express = require('express')
const fs = require('fs')

function adminBurgerRouter(myMeals) {
    const adminRoute = express.Router()

    adminRoute.get('/addmeal', (req, res) => {
        // const jsonText = fs.readFileSync(__dirname + '/meals.json')
        // const myMeals = JSON.parse(jsonText)
        res.render('adminAddMeal', {
            meals: myMeals
        })
    });

    adminRoute.get('/deletmeal', (req, res) => {
        res.render('adminDeletMeal', {
            meals: myMeals
        })
    });

    adminRoute.post('/deletmeal', (req, res) => {
        //console.log(req.body.mealid)
        const idx = req.body.mealid
        myMeals.splice(idx, 1)
        fs.writeFileSync('./meals.json', JSON.stringify(myMeals))


        res.sendStatus(200)
    })
    adminRoute.get('/editmeal', (req, res) => {
        res.render('adminEditMeal', {
            meals: myMeals
        })
    })
    adminRoute.post('/editmeal', (req, res) => {
        console.log(req.body)
        console.log(req.files)
        myMeals[req.body.mealid].title = req.body.mealTitle
        myMeals[req.body.mealid].description = req.body.mealDescription
        myMeals[req.body.mealid].price = req.body.mealPrice
        
        if (req.files) {
            console.log(req.files)
            const mealImg = req.files.imgFile
            // delete the old image file
            fs.unlinkSync("./public" + myMeals[req.body.mealid].imgUrl)
            // get image extenstion
            let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))

            // move the new image to uploaded folder
            mealImg.mv('./public/uploadedfiles/' + req.body.mealTitle.replace(/ /g, '_') + (req.body.mealid ) + ext).then(() => {
                myMeals[req.body.mealid].imgUrl ="/uploadedfiles/" + req.body.mealTitle.replace(/ /g, '_') + (req.body.mealid ) + ext
                fs.writeFileSync('./meals.json', JSON.stringify(myMeals))
                res.sendStatus(200)
            }).catch(error => {
                res.sendStatus(500)
            })
        } else {
            fs.writeFileSync('./meals.json', JSON.stringify(myMeals))
            res.sendStatus(200)
        }
    })

    adminRoute.post('/addmeal', (req, res) => {
        const mealTitle = req.body.mealTitle
        const mealPrice = req.body.mealPrice
        const mealDescription = req.body.mealDescription

        // chees burger 
        // chees_burger_1.jpeg
        // false cases
        // number 0
        // string empty string
        // object undefined
        // datatype null 
        if (mealTitle && mealPrice && mealDescription && req.files) {
            const mealImg = req.files.mealimg
            //mealImg.name // blabla.jpeg
            // get image extenstion
            let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))
            mealImg.mv('./public/uploadedfiles/' + mealTitle.replace(/ /g, '_') + myMeals.length + ext).then(() => {
                let obj = {
                    title: mealTitle,
                    description: mealDescription,
                    imgUrl: '/uploadedfiles/' + mealTitle.replace(/ /g, '_') + myMeals.length + ext,
                    price: mealPrice
                }
                myMeals.push(obj)
                fs.writeFileSync('./meals.json', JSON.stringify(myMeals))
                //res.render('adminAddMeal', {meals: meals})
                // you need to write the full path on res.redirect
                res.redirect('/admin/addmeal')
            }).catch(error => {
                res.send(error.message);
            })

        } else {
            res.send("meal data is not complete");
        }

    });
    return adminRoute
}


module.exports = {
    adminBurgerRouter
}