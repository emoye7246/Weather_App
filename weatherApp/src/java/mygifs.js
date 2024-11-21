import snowGif from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/backdrops/snow.gif'
import rainGif from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/backdrops/rainGif.gif'
import fogGif from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/backdrops/foggy.gif'
import windyGif from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/backdrops/windyweather.gif'
import cloudyGif from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/backdrops/cloudy.gif'
import cloudNight from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/backdrops/cloudNight.gif'
import clearDay from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/backdrops/012dfeba-3d1d-4e03-ae8b-a1c53f8084e5.gif'
import clearNight from '/Users/elijahmoye/Desktop/Weather_App/weatherApp/src/images/backdrops/clearNight.gif'






export let gifs = {


   
    "snow": snowGif,

    "rain": rainGif,

    "fog": fogGif,

    "wind":windyGif,

   "cloudy":cloudyGif,

   "partly-cloudy-day": cloudyGif,

    "partly-cloudy-night": cloudNight,

    "clear-day": clearDay,
    
    "clear-night": clearNight
}

export function displayBackground(condition){

    let body = document.body

    body.style.backgroundImage = `url(${gifs[condition]})`
}

