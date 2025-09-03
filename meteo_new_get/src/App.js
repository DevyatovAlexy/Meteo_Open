import React, {useState} from 'react'
import './App.css';
import {getMeteo, getTemperature} from "../../meteo";

const App = () => {
    const [temperature, setTemperature] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [inputCity, setInputCity] = useState(null)

    const getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value


        if (city.length <= 0) {
            alert('City name field is empty')
        } else {
            const response = await fetch(`http://localhost:3000/temperature?cityName=${city}`)
            const getCity = await response.json()
console.log(getCity)
             setTemperature(getCity.temperature)
            setTemperature(getCity.cityName)
        }
    }

    return (
        <div className={"App"}>
            <form onSubmit={getWeather}>
                <input
                    type="text"
                    name='city'
                    placeholder="Enter the name of the city"
                />
                <button>
                    Find out the weather
                </button>

                <p> Temperatur: {cityName}°C</p>
                <p> Temperatur: {temperature}°C</p>
            </form>
        </div>
    )
}

export default App
