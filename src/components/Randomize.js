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
        <div className="container">
            <h2>{props.city}</h2>
            <button className='btn' onClick={weatherClick}>Generate</button>
            <strong>Temperature: {weather.temp} °C</strong>
            <strong>Precipitation: {weather.precip}</strong>
            <strong>Wind: {weather.wind} km/h</strong>
        </div>
    )
}

Randomize.propTypes = {
    city: PropTypes.string.isRequired
}

export default Randomize