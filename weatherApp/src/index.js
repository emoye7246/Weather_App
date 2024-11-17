import '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/css/styles.css'
import _ from 'lodash'

let here = document.getElementById('here')


async function getWeather(searchKey) {

    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchKey}?key=F3SPHFPC6K3H3WATC6D4VDGV9`, {mode: 'cors'})

    
    await response.json()
    .then((response) => {


        console.log(response)
        

        console.log(response.currentConditions.icon)

        let weatherInfo = {

            Tempature: response.currentConditions.temp, 

            location: response.resolvedAddress, 

            feelsLike: response.currentConditions.feelslike,

            conditions: response.currentConditions.conditions

        }


        


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