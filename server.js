const express = require('express');
const port = 3000;
var bodyParser = require('body-parser');
const app = express();
var ejsLayouts = require("express-ejs-layouts");




app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(ejsLayouts);


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/artist', (req, res) => {
    res.render("artist");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/merch', (req, res) => {
    res.render("merch");
});


app.listen((process.env.PORT || port), () => {
    console.log(`Express server lisening on port ${port}!`);
});