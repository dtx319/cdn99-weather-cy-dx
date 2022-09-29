function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e325c95def146ec0f6463c1ba75ad893`)
        .then((res) => res.json())
        .then((data) => console.log(data))
}

function tempConvert(temp) {
    return (temp - 273.15) * 1.8 + 32
}

function mainWeather(data, type) {
    console.log(data)

    for (i of data) {

        if (i.type == type || type == undefined) {

            let weatherMain = i.weather[0].main
            let weatherDescription = i.weather[0].description

            let weatherFeelsLike = tempConvert(i.main.feels_like)
            let weatherHumidity = i.main.humidity
            let weatherPressure = i.main.pressure 
            let weatherTemp = tempConvert(i.main.temp)
            let weatherTempMax = tempConvert(i.main.temp_max)
            let weatherTempMin = tempConvert(i.main.temp_min)

            td[0].textContent = weatherMain
            td[1].textContent = weatherDescription
 
            td[2].textContent = weatherFeelsLike
            td[3].textContent = weatherHumidity
            td[4].textContent = weatherPressure
            td[5].textContent = weatherTemp
            td[6].textContent = weatherTempMax
            td[7].textContent = weatherTempMin

            tableBody.appendChild(clone);
        }
    }
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


getWeather()