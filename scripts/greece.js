import { locationList } from "./greece-LocationList.js"
import { getLocations } from "./greece-database.js"

const allLocations = getLocations()

for (const singleLocation of allLocations) {
    console.log(singleLocation)
}


const parentHTMLElement = document.querySelector(".locations")


parentHTMLElement.innerHTML = locationList()