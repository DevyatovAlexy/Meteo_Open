const dbQueries = require('../db_search_queries/dbQueries')

//Добавляем город в бд таблица "city"
const addCity = async (cityName) => {
    return await dbQueries.insertCity(cityName)
}
 // Запрашиваем ID города из бд который только что добавили
const findCityDbId = async (cityId) => {
    return await dbQueries.getCityBDId(cityId)
}


module.exports = {
    addCity,
    findCityDbId
}