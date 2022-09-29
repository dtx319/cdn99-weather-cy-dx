function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e325c95def146ec0f6463c1ba75ad893`)
        .then((res) => res.json())
        .then((data) => console.log(data))
}

function mainWeather(data, type) {
    console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)

    console.log(data)

    for (i of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {

        if (i.type == type || type == undefined) {

            let racerPosition = i.position
            let racerName = i.Driver.givenName + i.Driver.familyName
            let racerCar = i.Constructors[0].name

            let clone = myTemplate.content.cloneNode(true); 
            let td = clone.querySelectorAll('td') 

            td[0].textContent = racerPosition
            td[1].textContent = racerName
            td[2].textContent = racerCar

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