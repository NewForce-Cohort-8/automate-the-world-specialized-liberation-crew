import { getLocations } from "./greece-database.js"

export const locationList = () => {
    const allLocations = getLocations()

    let htmlString = '<article class="LocationList">'

    for (const singleLocation of allLocations) {

        
        htmlString += `<section class="card">

            <div class="cardHeader"><h2>${singleLocation.cityName}</h2></div>
            <div><img  class="cardImage" src="${singleLocation.cityImage}" /></div>
            <div class="cardFill">
            <p class="cityInfo">${singleLocation.cityInfo}</p>
            <div><img  class="cardImage" src="${singleLocation.landmarkImage}" /></div>
            <p class="cityLandmark">${singleLocation.landmark}</p>
            <div><img  class="cardImage" src="${singleLocation.personImage}" /></div>
            <p class="cityPerson">${singleLocation.person}</p>
            </div>
            
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
} 