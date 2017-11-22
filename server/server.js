const express = require('express');
const morgan = require('morgan');
const env = require('dotenv').config();
const Axios = require('axios');
const owm = process.env.OWM_API_KEY;
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/:city', (req, res) => {

  Axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + req.params.city + '&appid=' + owm)
    .then((result) => {
       res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    })

})

module.exports = app;

//sample API call (1 word city): 'http://api.openweathermap.org/data/2.5/weather?q=' + req.params.city + '&appid=' + owm
//sample API call (2 word city): http://api.openweathermap.org/data/2.5/weather?q=San&Diego&appid=' req.params.city.replace(/  +/g,'%')+ owm