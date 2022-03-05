import {useState} from 'react'
import PropTypes from 'prop-types'

/*
This is the only component that will use state.
State in this case is the name of the city passed in to the app.
*/

const CityForm = () => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className="city-form">
            <form>
                <input type='text' value={value} onChange={handleChange}/>
                <button className="show-weather" disabled={!value}>Show Weather</button>
            </form>
        </div>
    )
}
CityForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default CityForm