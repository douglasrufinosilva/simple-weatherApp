const key = '690df9e29ce60553981eb90b665b4ea3'


/* // Usando uma async pq vou pegar dados de um servidor externo, e o await vai esperar resposta do servidor para continuar execultando o codigo*/

function showWeatherOnScreen(data) {

    document.querySelector('.cityName').innerHTML = data.name + ', ' + data.sys.country
    document.querySelector('.tempInfo').innerHTML = Math.floor(data.main.temp) + '°C'
    document.querySelector('.tempText').innerHTML = data.weather[0].description
    document.querySelector('.iconWeather').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector('.humidity').innerHTML = `Umidade: ${data.main.humidity}%`
}

async function searchCity(city) { 
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    showWeatherOnScreen(data)
}

function searchBtn() {
    const city = document.querySelector('.inputSearchCity').value

    searchCity(city)
    document.querySelector('.inputSearchCity').value = ''
}
