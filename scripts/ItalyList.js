import { getCities } from "./italydatabase.js";
import { getCelebrities } from "./italydatabase.js";
import { getLandmarks } from "./italydatabase.js";

export const ItalyList = () => {
        
    const allCities = getCities()
    const allCelebrities = getCelebrities()
    const allLandmarks = getLandmarks()
    
    let italyHtmlString1 = ""
    let italyHtmlString2 = ""
    let italyHtmlString3 = ""
    
    for( let i=0; i<allCities.length; i++){
        if( i === 0){
            italyHtmlString1 += `<div class="location_header">
            <h2>${allCities[i].cityName}</h2>
            </div>
            <section class="location_one">
            <!-- card containing the location "Rome"-->
            <div class="card">
            <img  class="city" src=${allCities[i].image} alt="A skyline view of Rome at golden hour">
            <p>${allCities[i].description}</p>
            </div>`
        }
        else if( i === 1){
            italyHtmlString2 += `<div class="location_header">
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
            italyHtmlString3 += `<div class="location_header">
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
            italyHtmlString1 += `<!-- Card with landmark Roman Colosseum-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="Roman colosseum at night">
            <p>${allLandmarks[i].description}</p>
            </div>`
        }
        else if( i === 1){
            italyHtmlString2 += `<!-- Card with landmark Roman Colosseum-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="Roman colosseum at night">
            <p>${allLandmarks[i].description}</p>
            </div>`
        } 
        else if( i === 2){
            italyHtmlString3 += `<!-- Card with landmark Roman Colosseum-->
            <div class="card">
            <h3>${allLandmarks[i].landmarkName}</h3>
            <img class="landmark" src=${allLandmarks[i].image} alt="Roman colosseum at night">
            <p>${allLandmarks[i].description}</p>
            </div>`
        }
        
    }

    for( let i=0; i<allCelebrities.length; i++){
        if( i === 0){
            italyHtmlString1 += `<!-- Card with person Julius Caesar -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A bust of Julius Caesar, who is wearing armour and a serious expression">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        }
        else if( i === 1){
            italyHtmlString2 += `<!-- Card with person Julius Caesar -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A bust of Julius Caesar, who is wearing armour and a serious expression">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        } 
        else if( i === 2){
            italyHtmlString3 += `<!-- Card with person Julius Caesar -->
            <div class="card">
            <h3>${allCelebrities[i].celebrityName}</h3>
            <img class="person" src=${allCelebrities[i].image} alt="A bust of Julius Caesar, who is wearing armour and a serious expression">
            <p>${allCelebrities[i].description}</p>
            </div>
            </section>`
        }
        
    }


    let finalString = italyHtmlString1 + italyHtmlString2 + italyHtmlString3








    return finalString

}


{/* <div class="location_header">
<h2>Rome</h2>
</div>
<section class="location_one">
<!-- card containing the location "Rome"-->
<div class="card">
<img  class="city" src="https://www.tastingtable.com/img/gallery/14-foods-and-wines-you-have-to-try-in-rome-italy/intro-1667405524.webp" alt="A skyline view of Rome at golden hour">
<p>Rome was called the “Eternal City” by the ancient Romans because they believed that no matter what happened in the rest of the world, the city of Rome would always remain standing. Exploring the city center by foot surrounded by glorious monuments and colossal remains takes you back in time to the “glory that was Rome”.</p>
</div>
<!-- Card with landmark Roman Colosseum-->
<div class="card">
<h3>The Colosseum</h3>
<img class="landmark" src="https://timelinecovers.pro/facebook-cover/thumbs/italy-rome-colosseum-with-lights-facebook-cover.jpg" alt="Roman colosseum at night">
<p>The Colosseum is the main symbol of Rome. It's an imposing construction that, with almost 2,000 years of history, will bring you back in time to discover the way of life in the Roman Empire.

    The construction of the Colosseum began in the year 72 under the empire of Vespasian and was finished in the year 80 during the rule of the emperor Titus. After completion, the Colosseum became the greatest Roman amphitheater, measuring 188 meters in length, 156 meters in width, and 57 meters in height.</p>
</div>
<!-- Card with person Julius Caesar -->
<div class="card">
<h3>Julius Caesar</h3>
<img class="person" src="https://cdn.britannica.com/11/196711-050-FA58D50D/Julius-Caesar-marble-sculpture-Andrea-di-Pietro.jpg?w=300" alt="A bust of Julius Caesar, who is wearing armour and a serious expression">
<p>Julius Ceasar, born in Rome, was a Roman general and statesman who transformed Rome from a republic to an empire. He was born 12 July 100 BC in Rome as Gaius Julius Caesar. Caesar led the Roman armies in the Gallic Wars before defeating his political rival Pompey in a civil war, and subsequently became dictator of Rome from 49 BC until his assassination in 44 BC.</p>
</div>
</section> */}
