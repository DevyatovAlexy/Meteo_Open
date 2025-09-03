const meteoServies = require('../Service/meteoServies')

const fetchAndSaveWeather = async (req, res) => {
    try {
        const {cityName} = req.query

        if (!cityName ){
            return res.status(400).send({message: "Parameter cityName is required"})
        }
        const meteoDetails = await meteoServies.saveMeteoForCity(cityName)

        res.send(meteoDetails)
    }
    catch (error) {
        res.status(500).send({
            message: 'Error: processing request',
            error: error.message})
    }
}

module.exports = {
    fetchAndSaveWeather,
}