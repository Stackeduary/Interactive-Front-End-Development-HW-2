import Randomize from './Randomize'
import ShowWeather from './ShowWeather'

const App = () => {
    return (
        <div className='app'>
            <ShowWeather />
            <Randomize />
        </div>
    )
}

export default App