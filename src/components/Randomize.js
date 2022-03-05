const Randomize = () => {
    const randomNum = Math.random()
    const randomTemp = Math.floor(randomNum * 51) - 20
    const randomEmojiIndex = Math.floor(randomNum * 7)
    const randomWind = Math.floor(randomNum * 11)
    return [randomTemp, randomEmojiIndex, randomWind]
}

export default Randomize