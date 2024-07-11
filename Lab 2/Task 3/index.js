const express = require('express')

let app = express()

app.get('/', (req, res) => {
    res.send('Hello, Express')
})

// app.get('/weather', (req, res) => {
//     res.send('This is a Weather Page!')
// })

app.get('/login', (req, res) => {
    res.send('This is a Login Page!')
})

app.get('/weather/Zhytomyr', (req, res) => {
    res.send('Zhytomyr')
})

app.get('/weather/Kyiv', (req, res) => {
    res.send('Kyiv')
})

app.get('/weather', (req, res) => {
    if (req.query.city) {
        const city = req.query.city
        console.log(city)
        res.send(city)
    }
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})