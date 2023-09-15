import { getCities } from "./databaseS.js";
import { getCelebrities } from "./databaseS.js";
import { getLandmarks } from "./databaseS.js";

export const SwedenList = () => {
        
    const allCities = getCities()
    const allCelebrities = getCelebrities()
    const allLandmarks = getLandmarks()
    
    let swedenHtmlString1 = ""
    let swedenHtmlString2 = ""
    let swedenHtmlString3 = ""
    
    for( let i=0; i<allCities.length; i++){
        if( i === 0){
            swedenHtmlString1 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Stockholm"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="Image of the vibrant buildings of Stockholm"">
            <p>${allCities[i].description}</p>
            </div>`
        }
        else if( i === 1){
            swedenHtmlString2 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Stockholm"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="Image of the vibrant buildings of Stockholm"">
            <p>${allCities[i].description}</p>
            </div>`
        } 
        else if( i === 2){
            swedenHtmlString3 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Stockholm"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="Image of the vibrant buildings of Stockholm"">
            <p>${allCities[i].description}</p>
            </div>`
        }
        
    }

    for( let i=0; i<allLandmarks.length; i++){
        if( i === 0){
            swedenHtmlString1 += `<!-- Card with landmark Royal Palace-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="Night at the Royal Palace">
            <p>${allLandmarks[i].description}</p>
            </div>`
        }
        else if( i === 1){
            swedenHtmlString2 += `<!-- Card with landmark Royal Palace-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="Night at the Royal Palace">
            <p>${allLandmarks[i].description}</p>
            </div>`
        } 
        else if( i === 2){
            swedenHtmlString3 += `<!-- Card with landmark Royal Palace-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="Night at the Royal Palace">
            <p>${allLandmarks[i].description}</p>
            </div>`
        }
        
    }

    for( let i=0; i<allCelebrities.length; i++){
        if( i === 0){
            swedenHtmlString1 += `<!-- Card with person Gustavus the Great -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A painting of the late Gustavus Adolphus, monarch of early sweden">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        }
        else if( i === 1){
            swedenHtmlString2 += `<!-- Card with person Gustavus the Great -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A painting of the late Gustavus Adolphus, monarch of early sweden">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        } 
        else if( i === 2){
            swedenHtmlString3 += `<!-- Card with person Gustavus the Great -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A painting of the late Gustavus Adolphus, monarch of early sweden">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        }
        
    }


    let finalString = swedenHtmlString1 + swedenHtmlString2 + swedenHtmlString3








    return finalString

}


