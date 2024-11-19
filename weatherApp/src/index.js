import '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/css/styles.css'
import _ from 'lodash'
import { displayIcon } from './java/myIcons'





async function getWeather(searchKey) {

    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchKey}?unitGroup=metric&include=hours%2Cdays%2Ccurrent%2Cevents%2Calerts&key=F3SPHFPC6K3H3WATC6D4VDGV9&contentType=json&include=iconSet=icons1`, {mode: 'cors'})

    
    await response.json()

    .then((response) => {



        let weatherInfo = {

            Tempature: response.currentConditions.temp, 

            location: response.resolvedAddress, 

            feelsLike: response.currentConditions.feelslike,

            conditions: response.currentConditions.icon,

            sunrise: response.currentConditions.sunrise, 

            sunset: response.currentConditions.sunset


        }

        displayIcon(weatherInfo.conditions)

        let sunrise = document.getElementById('sunrise')
        let sunset = document.getElementById('sunset')

        sunrise.innerHTML = `Sunrise: ${weatherInfo.sunrise}`
        sunset.innerHTML = `Sunset: ${weatherInfo.sunset}`


    })
    .catch(() => {

        console.log('Could Not Find')
    })

        
}

function searchLocation(){


    let enter = document.getElementById('enter')
    let inputs = document.querySelector('input')


    enter.addEventListener('click', () => {

        getWeather(inputs.value)
        
    })
}
searchLocation()