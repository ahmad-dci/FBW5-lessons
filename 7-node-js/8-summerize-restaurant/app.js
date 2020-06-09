const express = require('express');
const emailSender = require('./modules/emailSender')

const app = express();


// use express urlencoder to get posted data
app.use(express.urlencoded({extended: true}));

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

app.get('/', (req, res) => {
    res.render('main');
});

// app.get('/home/subhome', (req, res) => {
//     res.render('main');
// });

app.get('/admin/addmeal', (req, res) => {
    res.render('adminAddMeal', {meals: meals})
});
app.post('/admin/addmeal', (req, res) => {
    const mealTitle = req.body.mealTitle
    const mealPrice = req.body.mealPrice
    const mealDescription = req.body.mealDescription

    let obj = {
        title: mealTitle,
        description: mealDescription,
        imgUrl: "/img/burger/4.png",
        price: mealPrice
    }
    meals.push(obj)
    //res.render('adminAddMeal', {meals: meals})
    res.redirect('/admin/addmeal')

});

app.get('/menu', (req, res) => {
    res.render('menu', {meals: meals})
});
app.get('/contact', (req, res) => {
    res.render('contact', {sent: 1})
});
app.post('/contact', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if(name != "" && name.length < 100 ){
        emailSender.sendEmail(name, email, subject, message, (ok) => {
            if(ok){
                res.sendStatus(200);
            } else{
                res.sendStatus(500);
            }
        });
    }
    
   
});
app.post('/contact1', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if(name != "" && name.length < 100 ){
        emailSender.sendEmail(name, email, subject, message, (ok) => {
            if(ok){
                //res.sendStatus(200);
                res.render('contact', {sent: 2})
            } else{
                //res.sendStatus(500);
                res.render('contact', {sent: 3})
            }
        });
    }
    
   
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});