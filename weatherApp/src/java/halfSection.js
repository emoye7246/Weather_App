export function Info(locName, locTemp, locFeels){


    let locationName = document.getElementById('locationName')
    let locationTemp = document.getElementById('locationTemp')
    let locationFeelsLike = document.getElementById('locationFeelsLike')

    locationName.innerHTML = `${locName}`
    locationTemp.innerHTML = `${locTemp}&#8457`
    locationFeelsLike.innerHTML = `Feels Like: ${locFeels}&#8457`
}