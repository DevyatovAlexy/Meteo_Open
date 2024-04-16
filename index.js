const express = require('express')
const app = express()
const port = 3000

const {getTemperature} = require('./meteo')

app.get('/temperature', async  (req, res) => {
    res.send( await getTemperature(req.query.cityName))
    })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})