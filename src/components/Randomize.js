import {useState} from 'react'
import PropTypes from 'prop-types'

const Randomize = (props) => {
    const randomNum = Math.random()
    const randomTemp = Math.floor(randomNum * 51) - 20
    const randomEmojiIndex = Math.floor(randomNum * 7)
    const randomWind = Math.floor(randomNum * 11)
    const precipArray = ['☀️', '⛅️', '☁️', '🌩️', '🌧️', '🌦️', '🌨️']

    const [weather, setWeather] = useState({
        temp: 0,
        precip: 0,
        wind: 0
    })

    const weatherClick = () => {
        setWeather({
            temp: randomTemp,
            precip: precipArray[randomEmojiIndex],
            wind: randomWind
        })
    }

    return (
        <div className="weather-widget">
            <button onClick={weatherClick}>Generate</button>
            <strong>Temperature: {weather.temp} °C</strong>
            <strong>Precipitation: {weather.precip}</strong>
            <strong>Wind: {weather.wind} km/h</strong>
        </div>
    )
}

Randomize.PropTypes = {
    city: PropTypes.string.isRequired
}

export default Randomize