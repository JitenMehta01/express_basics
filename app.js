const express = require('express');

const app = express();

app.use(express.urlencoded());// middleware


app.set('view engine', 'pug')

app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/cards', (req, res) =>{
    res.render('card', {prompt: "Testing local var" , hint: "Think about who's tomb it is."});
});

app.all('/hello', (req, res) =>{
    res.render('hello', {name: req.body.username});

})


app.listen('3000', () =>{
    console.log('This expresss app in running on local host')
});
