const db = require('./db')



//Добавляем город в таблицу City в BD
const insertCity = async (cityName) => {
    const [city] = await db('city')
        .insert({name: cityName})
        .returning("*")
    return city
}
// Запрашиваем у бд название города из таблицы city
const getCityBDId = async  (cityId) => {
   return db('city')
       .where({id: cityId})
       .first();
}

// Добавляем в таблицу "weather" данные о погоде
const insertTemperature = async (temperature, date, cityId) => {
    const [addWeather] = await db('weather')
        .insert({
            temperature: temperature,
            date: date,
            city_id: cityId
        })
        .returning('*')
    return addWeather
}
//
const getMeteoDetails = async (weatherId) =>{
    return db('weather')
        .join('city','weather.city_id','city.id')
        .select('city.name AS cityName', 'weather.temperature', db.raw('TO_CHAR(weather.date, \'YYYY-MM-DD\') AS date'))
        .where('weather.id', weatherId)
        .first()
}



module.exports = {
    insertCity,
    insertTemperature,
    getCityBDId,
    getMeteoDetails
}