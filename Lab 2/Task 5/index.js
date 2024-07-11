const express = require('express')
const hbs = require('hbs')

let app = express()

app.get('/weather', (req, res) => {
    const weather = {
        description: 'Clear sky'
    }
    res.render('weather.hbs', {weather})
})

hbs.registerPartials(__dirname + '/views/partials')

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})