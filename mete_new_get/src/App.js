import React, {useState} from 'react'
import './App.css';

const App = () => {
    const [temperature, setTemperature] = useState(''
    )

    const getWeather = async (e) => {

        e.preventDefault()
        let city = e.target.elements.city.value

        if (city.length <= 0) {
            alert('City name field is empty')
        } else {
            const response = await fetch(`http://localhost:3000/temperature?cityName=${city}`)
            const getCity = await response.json()

             setTemperature(getCity.temperature_2m)
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

                <p> Temperatur: {temperature}</p>
            </form>
        </div>
    )
}

export default App
