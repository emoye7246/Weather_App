import { format } from "date-fns"
import { formatInTimeZone } from 'date-fns-tz'
import { icons } from "./myIcons"

export function Info(locName, locTemp, locFeels){


    let locationName = document.getElementById('locationName')
    let locationTemp = document.getElementById('locationTemp')
    let locationFeelsLike = document.getElementById('locationFeelsLike')

    locationName.innerHTML = `${locName}`
    locationTemp.innerHTML = `${locTemp}&#8457`
    locationFeelsLike.innerHTML = `Feels Like: ${locFeels}&#8457`
}


export function timeControl(timezone){

    let dateDisplay = document.getElementById('dateDisplay')
    let timeDisplay = document.getElementById('timeDisplay')

    dateDisplay.innerHTML = `${format(new Date(), "MMMM do, yyyy")}`
    timeDisplay.innerHTML = `${formatInTimeZone(new Date(), timezone, 'h:mm a')}`

    

}

export function weekForecast(obj){

    let futures = document.querySelectorAll('.futures')
    let futureArray = Array.from(futures)


    futureArray.forEach((element) => {

        element.innerHTML = ' '

       let imagesIcon = document.createElement('img')
       imagesIcon.src = icons[obj.days[futureArray.indexOf(element)].icon]
       imagesIcon.style.height = '50px'
       imagesIcon.style.width = '50px'

       element.append(imagesIcon)

    })
}