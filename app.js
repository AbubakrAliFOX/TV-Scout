const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const axios = require('axios');


app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.render('home');
})

app.post('/search', async (req, res) => {
    const {searchTerm} = req.body;
    const search = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const searchResult = search.data;
    
    res.render('index', {searchResult})
})

app.listen(3000, () => {
    console.log('App running on port 3000');
})
