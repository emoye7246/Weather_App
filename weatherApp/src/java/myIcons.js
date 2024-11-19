import snow from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/icons/snow.png'
import rain from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/icons/rain.png'
import fog from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/icons/fog.png'
import wind from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/icons/wind.png'
import cloudy from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/icons/cloudy.png'
import partly_cloudy_day from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/icons/partly-cloudy-day.png'
import partly_cloudy_night from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/icons/partly-cloudy-night.png'
import clear_day from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/icons/clear-day.png'
import clear_night from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/icons/clear-night.png'

let textSource = document.getElementById('textSource')

export let icons = {


    "snow": snow,

    "rain": rain,

    "fog": fog,

    "wind":wind,

   "cloudy":cloudy,

   "partly-cloudy-day": partly_cloudy_day,

    "partly-cloudy-night": partly_cloudy_night,

    "clear-day": clear_day,
    
    "clear-night": clear_night
}


export function displayIcon(conditions){

    textSource.src = icons[conditions]

    
  
    
}

// We need to rename the dash elements but