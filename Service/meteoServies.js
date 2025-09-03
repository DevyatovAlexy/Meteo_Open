const dbQueries = require('../db_search_queries/dbQueries')
const { getTemperature } = require('../meteo')
const cityService = require('./CityServies')
const db = require("../db_search_queries/db");

//Добавление пагоды в бд и возвращаем запрос клиенту
const saveMeteoForCity = async (cityName) => {
   // Добавляем город в БД
    const city = await cityService.addCity(cityName)
    // возвращаем ID города
   const cityFromDb = await cityService.findCityDbId(city.id)
// запрашиваем погоду у Meteo.js
   const meteoData = await getTemperature(cityFromDb.name)
       // Добавляем в БД погоду
   const addedMeteo = await dbQueries.insertTemperature(
       meteoData.temperature_2m,
       meteoData.time,
       city.id
   )

return await dbQueries.getMeteoDetails(addedMeteo.id)

}
  module.exports = {
   saveMeteoForCity
  }