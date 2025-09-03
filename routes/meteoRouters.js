const express = require('express')
const router = express.Router()
const meteoController = require('../controllers/meteoControllers')


router.get('/', meteoController.fetchAndSaveWeather)

module.exports = router