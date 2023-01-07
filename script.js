const url = 'https://api.openweathermap.org/data/2.5/'
const key = '53f1295b5ecccd8cdf0771f1f4a6c43c'

const setQuery = (evt) => {
    if(evt.keyCode == '13') {
        getResult(searchBar.value)
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&units=metric&appid=${key}&lang=en`
    fetch(query)
    .then(weather => {
        return weather.json()
    }).then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minMax = document.querySelector('.minMax')
    minMax.innerText = `${Math.round(result.main.temp_min)}°C | ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)
