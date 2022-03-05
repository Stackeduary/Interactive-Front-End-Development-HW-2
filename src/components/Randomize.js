/*
Randomize weather generates one random number and then returns an array of three values--
randomTemp, randomEmojiIndex, randomWind
--that are functions of randomNum.
This array will be consumed by the GenerateWeather component.

***Do I need the children prop here?
*/

const Randomize = () => {
    const randomNum = Math.random()
    const randomTemp = Math.floor(randomNum * 51) - 20
    const randomEmojiIndex = Math.floor(randomNum * 7)
    const randomWind = Math.floor(randomNum * 11)
    const precipArray = ['☀️', '⛅️', '☁️', '🌩️', '🌧️', '🌦️', '🌨️']
    return (
        <div>
            <button className='generate-weather'>Generate</button>
            <strong>Temperature: {randomTemp} °C</strong>
            <strong>Precipitation: {precipArray[randomEmojiIndex]}</strong>
            <strong>Wind: {randomWind} km/h</strong>
        </div>
    )
}

export default Randomize