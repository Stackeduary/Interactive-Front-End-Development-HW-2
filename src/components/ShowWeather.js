import PropTypes from 'prop-types'

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