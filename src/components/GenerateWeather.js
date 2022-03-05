import PropTypes from 'prop-types'
import Randomize from './Randomize'

/*
GenerateWeather receives an array of three props from Randomize:
randomTemp, randomEmojiIndex, randomWind
It then appends these three props with their appropriate text
*/

const GenerateWeather = (props) => {
    const temp = `Temperature: ${props} °C`
    return (
        <div className="weather-widget">{temp}</div>
    )
}

export default GenerateWeather