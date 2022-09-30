function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e325c95def146ec0f6463c1ba75ad893`)
        .then((res) => res.json())
        .then((data) => mainWeather(data))
/* Replaced console.log with function to convert data gathered from API */
}

function tempConvert(temp) {
    return Math.round((temp - 273.15) * 1.8 + 32)
    /* Added Math.round() to return whole numbers */
}

function mainWeather(data) {

    /* Console logging to parse through data */

    // console.log(data)
    // console.log(data.main)
    // console.log(data.name)
    // console.log(data.weather[0])

    /* Space Code */
    // let weatherMain = i.weather[0].main
    // let weatherDescription = i.weather[0].description
    // let weatherFeelsLike = tempConvert(i.main.feels_like)
    // let weatherHumidity = i.main.humidity
    // let weatherPressure = i.main.pressure 
    // let weatherTemp = tempConvert(i.main.temp)
    // let weatherTempMax = tempConvert(i.main.temp_max)
    // let weatherTempMin = tempConvert(i.main.temp_min)

    /* Removed 'for loop' as were collecting data from a single data source: i.e. the submitted city data. (No need to loop through pulled data) */
    /* Changed variables to reference collected data */
    let name = data.name
    let weatherMain = data.main.feels_like
    let weatherDescription = data.weather[0].description
    let weatherHumidity = data.main.humidity
    let weatherPressure = data.main.pressure 
    let weatherTemp = data.main.temp
    let weatherTempMax = data.main.temp_max
    let weatherTempMin = data.main.temp_min

    /* Added HTML template cloning to push .js data to HTML */
    let clone = myTemplate.content.cloneNode(true);
    let td = clone.querySelectorAll('td')

    td[0].textContent = name
    td[1].textContent = tempConvert(weatherMain) /* Added tempConvert to here instead of variable */
    td[2].textContent = weatherDescription
    td[3].textContent = weatherHumidity
    td[4].textContent = weatherPressure
    td[5].textContent = tempConvert(weatherTemp)
    td[6].textContent = tempConvert(weatherTempMax)
    td[7].textContent = tempConvert(weatherTempMin)

    tableBody.appendChild(clone);
}

const myForm = document.getElementById('form')

myForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    tableBody.innerHTML = ''
    const myForm = document.getElementById('form')
    formData = new FormData(myForm)
    var city = formData.get("city")
    getWeather(city)
})

/* Removed getWeather() function call as it will be called when eventListener is triggered */