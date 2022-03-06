import {useState} from 'react'
import PropTypes from 'prop-types'

const CityForm = ({cityProp}) => {
    const [city, setCity] = useState('')

    const changeCity = (event) => {
        setCity(event.target.city)
    }

    const clickEvent = () => {
        cityProp(city)
    }

    const cityTooLong = city.length > 19

    return (
        <div className="city-form">
            <input type='text' value={city} onChange={changeCity}/>
            <button disabled={city == '' || cityTooLong} onClick={clickEvent}>Show Weather</button>
            {cityTooLong && <strong>City name is too long!</strong>}
        </div>
    )
}
CityForm.propTypes = {
    cityProp: PropTypes.func.isRequired
}

export default CityForm