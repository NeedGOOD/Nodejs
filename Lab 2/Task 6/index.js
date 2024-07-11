const express = require("express")
const hbs = require("hbs")
const path = require("path")

const fetch = require("node-fetch")

const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/weather(/:city?)', async (req, res) => {
    let city = req.params.city

    let key = '6e6bc39a219b4163b6ee968a612698c2'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    let response = await fetch(url)

    let weather = await response.json()

    res.render(`partials/weather`, { city, weather })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})