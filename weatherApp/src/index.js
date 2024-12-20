import '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/css/styles.css'
import _ from 'lodash'
import { displayIcon } from './java/myIcons'
import { Info, weekForecast } from './java/halfSection'
import { timeControl } from './java/halfSection'
import { displayBackground } from './java/mygifs'

async function getWeather(searchKey) {

    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchKey}?unitGroup=us&include=hours%2Cdays%2Ccurrent%2Cevents%2Calerts&key=F3SPHFPC6K3H3WATC6D4VDGV9&contentType=json&include=iconSet=icons1`, {mode: 'cors'})

    
    await response.json()

    .then((response) => {

        let weatherInfo = {

            location: response.resolvedAddress, 

            Tempature: response.currentConditions.temp, 

            feelsLike: response.currentConditions.feelslike,

            conditions: response.currentConditions.icon,

            sunrise: response.currentConditions.sunrise, 

            sunset: response.currentConditions.sunset,

            timezone: response.timezone
        }

        console.log(response)

        weekForecast(response)

        return weatherInfo


    })
    .then((weatherInfo) => {

        displayIcon(weatherInfo.conditions)
        displayBackground(weatherInfo.conditions)


        let sunrise = document.getElementById('sunrise')
        let sunset = document.getElementById('sunset')

        sunrise.innerHTML = `Sunrise: ${weatherInfo.sunrise}`
        sunset.innerHTML = `Sunset: ${weatherInfo.sunset}`

        Info(weatherInfo.location, weatherInfo.Tempature, weatherInfo.feelsLike)
        timeControl(weatherInfo.timezone)
    })
    .catch(() => {

        console.log('Could Not Find')
    })

        
}

getWeather('Cupertino')

function searchLocation(){


    let enter = document.getElementById('enter')
    let inputs = document.querySelector('input')


    enter.addEventListener('click', () => {

        getWeather(inputs.value)
        
    })
}
searchLocation()