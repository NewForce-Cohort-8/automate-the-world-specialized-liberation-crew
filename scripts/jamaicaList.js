import { getCities } from "./jamaicaDatabase.js";
import { getCelebrities } from "./jamaicaDatabase.js";
import { getLandmarks } from "./jamaicaDatabase.js";

export const jamaicaList = () => {
        
    const allCities = getCities()
    const allCelebrities = getCelebrities()
    const allLandmarks = getLandmarks()
    
    let jamaicaHtmlString1 = ""
    let jamaicaHtmlString2 = ""
    let jamaicaHtmlString3 = ""
    
    for( let i=0; i<allCities.length; i++){
        if( i === 0){
            jamaicaHtmlString1 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Kingston"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="A night time view of the city of kingston">
            <p>${allCities[i].description}</p>
            </div>`
        }
        else if( i === 1){
            jamaicaHtmlString2 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Spanish Town"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="a picture of children in jamaica getting out of school">
            <p>${allCities[i].description}</p>
            </div>`
        } 
        else if( i === 2){
            jamaicaHtmlString3 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Port Antonio"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="A picture of the island with lush greenery and crystal blue waters">
            <p>${allCities[i].description}</p>
            </div>`
        }
        
    }

    for( let i=0; i<allLandmarks.length; i++){
        if( i === 0){
            jamaicaHtmlString1 += `<!-- Card with landmark Bob Marley Museum-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="a mural on one of the walls of the bob marley museum">
            <p>${allLandmarks[i].description}</p>
            </div>`
        }
        else if( i === 1){
            jamaicaHtmlString2 += `<!-- Card with landmark Devon House-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="A giant white house surrounded by lush trees">
            <p>${allLandmarks[i].description}</p>
            </div>`
        } 
        else if( i === 2){
            jamaicaHtmlString3 += `<!-- Card with landmark Appleton Estate-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="A group of individuals sitting in front of the Appleton estate rum sign">
            <p>${allLandmarks[i].description}</p>
            </div>`
        }
        
    }

    for( let i=0; i<allCelebrities.length; i++){
        if( i === 0){
            jamaicaHtmlString1 += `<!-- Card with person Bob Marley -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="picture of bob marley smiling">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        }
        else if( i === 1){
            jamaicaHtmlString2 += `<!-- Card with person Henry Belafonte -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="...">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        } 
        else if( i === 2){
            jamaicaHtmlString3 += `<!-- Card with person Miss Lou -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A picture of miss lou smiling">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        }
        
    }


    let finalString = jamaicaHtmlString1 + jamaicaHtmlString2 + jamaicaHtmlString3








    return finalString

}


