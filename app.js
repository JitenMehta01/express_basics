const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.urlencoded());// middleware
app.use(cookieParser());

app.set('view engine', 'pug')

app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/cards', (req, res) =>{
    res.render('card', {prompt: "Testing local var" , hint: "Think about who's tomb it is."});
});

app.post('/hello', (req, res) =>{
    res.cookie('username', req.body.username)
    res.render('hello', {name: req.body.username});
})

app.get('/hello', (req, res) =>{
    res.render('hello', {name: req.cookies.username});
})

// attempted to use .all method to render hello pug

// app.all('/hello', (req, res) =>{
//     res.cookie('username', req.body.username)
//     res.render('hello', {name: req.body.username});
//     res.render('hello', {name: req.cookies.username});
// })

app.listen('3000', () =>{
    console.log('This expresss app in running on local host')
});
