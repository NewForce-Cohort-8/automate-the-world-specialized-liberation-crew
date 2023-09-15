import { getCities } from "./Switzerlanddatabase.js";
import { getCelebrities } from "./Switzerlanddatabase.js";
import { getLandmarks } from "./Switzerlanddatabase.js";

export const SwitzerlandList = () => {

    const allCities = getCities()
    const allCelebrities = getCelebrities()
    const allLandmarks = getLandmarks()

    let SwitzerlandHtmlString1 = ""
    let SwitzerlandHtmlString2 = ""
    let SwitzerlandHtmlString3 = ""

    for( let i=0; i<allCities.length; i++){
        if( i === 0){
            SwitzerlandHtmlString1 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Rome"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="A skyline view of Rome at golden hour"
            <p>${allCities[i].description}</p>
            </div>`
        }
        else if( i === 1){
            SwitzerlandHtmlString2 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Rome"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="A skyline view of Rome at golden hour">
            <p>${allCities[i].description}</p>
            </div>`
        } 
        else if( i === 2){
            SwitzerlandHtmlString3 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Rome"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="A skyline view of Rome at golden hour">
            <p>${allCities[i].description}</p>
            </div>`
        }

    }

    for( let i=0; i<allLandmarks.length; i++){
        if( i === 0){
            SwitzerlandHtmlString1 += `<!-- Card with landmark Roman Colosseum-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="Roman colosseum at night">
            <p>${allLandmarks[i].description}</p>
            </div>`
        }
        else if( i === 1){
            SwitzerlandHtmlString2 += `<!-- Card with landmark Roman Colosseum-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="Roman colosseum at night">
            <p>${allLandmarks[i].description}</p>
            </div>`
        } 
        else if( i === 2){
            SwitzerlandHtmlString3 += `<!-- Card with landmark Roman Colosseum-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="Roman colosseum at night">
            <p>${allLandmarks[i].description}</p>
            </div>`
        }

    }

    for( let i=0; i<allCelebrities.length; i++){
        if( i === 0){
            SwitzerlandHtmlString1 += `<!-- Card with person Julius Caesar -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A bust of Julius Caesar, who is wearing armour and a serious expression">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        }
        else if( i === 1){
            SwitzerlandHtmlString2 += `<!-- Card with person Julius Caesar -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A bust of Julius Caesar, who is wearing armour and a serious expression">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        } 
        else if( i === 2){
            SwitzerlandHtmlString3 += `<!-- Card with person Julius Caesar -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A bust of Julius Caesar, who is wearing armour and a serious expression">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        }

    }


    let finalString = SwitzerlandHtmlString1 + SwitzerlandHtmlString2 + SwitzerlandHtmlString3








    return finalString

}


