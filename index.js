require ('dotenv').config()
const express = require('express')
const meteoRouters = require('./routes/meteoRouters')
const app = express()
const port =process.env.PORT || 3001

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Welcome')
})
app.use('/temperature', meteoRouters)

//Обработка ошибок
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})