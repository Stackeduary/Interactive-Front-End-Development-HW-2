import PropTypes from 'prop-types'

/*
This component will most likely be deleted. I was originally planning to separate the form 
and the submit button into separate components in order to adhere to the 50-line-max rule
for any component. But on closer inspection, it doesn't seem feasible to split the form field
and the submit button into different components since the form will contain state.
*/

const ShowWeather = (props) => {
    return (
        <button className="show-weather" onClick={props.onSubmit}>
            {props.text}
        </button>
    )
}
ShowWeather.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    text: PropTypes.string
}

ShowWeather.defaultProps = {text: 'Show weather'}

export default ShowWeather