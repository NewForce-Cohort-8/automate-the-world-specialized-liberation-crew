
const database = {
    cities: [
        {
            image: "https://www.tastingtable.com/img/gallery/14-foods-and-wines-you-have-to-try-in-rome-italy/intro-1667405524.webp",
            cityName: "Rome",
            description: `Rome was called the “Eternal City” by the ancient Romans because they believed that no matter what happened in the rest of the world, the city of Rome would always remain standing. Exploring the city center by foot surrounded by glorious monuments and colossal remains takes you back in time to the “glory that was Rome”` ,
            
        },
        {
            image: "https://images.unsplash.com/photo-1558271736-cd043ef2e855?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlfGVufDB8fDB8fHww&w=1000&q=80",
            cityName: "Venice",
            description: "Venice, Italian Venezia, city, major seaport, and capital of both the provincia (province) of Venezia and the regione (region) of Veneto, northern Italy. An island city, it was once the centre of a maritime republic. It was the greatest seaport in late medieval Europe and the commercial and cultural link to Asia" ,
           
        },
        {
            image: "https://www.italia.it/content/dam/tdh/en/interests/toscana/pisa/pisa-approfondimento/media/1600X1000_pisa_il_fascino_dell_antica_repubblica_marinara_hero.jpg",
            cityName: "Pisa",
            description: "Pisa is a city in Italy's Tuscany region best known for its iconic Leaning Tower. Already tilting when it was completed in 1372, the 56m white-marble cylinder is the bell tower of the Romanesque, striped-marble cathedral that rises next to it in the Piazza dei Miracoli. Also in the piazza is the Baptistry, whose renowned acoustics are demonstrated by amateur singers daily, and the Caposanto Monumentale cemetery." ,
            
        }
    
    ],
    landmarks: [
        {
            image: "https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK-1200-80.jpg",
            landmarkName: "The Roman Colosseum",
            description: "The Colosseum was the largest amphitheater built in ancient Rome. The massive arena held thousands of spectators, who packed the stands to watch gladiators battle to the death and fight exotic animals, such as lions. Built in A.D. 72, the four-story amphitheater soon towered nearly 165 feet (50 meters) high. The Roman Empire used the Colosseum for more than four centuries before it ceased to function as a sporting arena as spectators lost interest in the type of grisly public entertainment it provided" ,
            
        },
        {
            image: "https://cdn.britannica.com/64/153464-050-551A86F7/Rialto-Bridge-Grand-Canal-Venice.jpg",
            landmarkName: "The Grand Canal",
            description: "Grand Canal, Italian Canale Grande, main waterway of Venice, Italy, following a natural channel that traces a reverse-S course from San Marco Basilica to Santa Chiara Church and divides the city into two parts." ,
           
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Italy_-_Pisa_-_Leaning_Tower.jpg/220px-Italy_-_Pisa_-_Leaning_Tower.jpg",
            landmarkName: "The Leaning Tower of Pisa",
            description: "The Leaning Tower of Pisa (Italian: torre pendente di Pisa), or simply, the Tower of Pisa is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry." ,
            
        }  
    ],
    celebrities: [
        {
            image: "https://cdn.britannica.com/11/196711-050-FA58D50D/Julius-Caesar-marble-sculpture-Andrea-di-Pietro.jpg",
            celebrityName: "Julius Caesar",
            description: "Gaius Julius Caesar, born in Rome, was a Roman general and statesman. A member of the First Triumvirate, Caesar led the Roman armies in the Gallic Wars before defeating his political rival Pompey in a civil war, and subsequently became dictator from 49 BC until his assassination in 44 BC. He played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire." ,
            
        },
        {
            image: "https://allaboutvenice.com/wp-content/uploads/2020/04/Vivaldi.jpg",
            celebrityName: "Antonio Vivaldi",
            description: "Antonio Lucio Vivaldi was born on March 4, 1678 in Venice. He was a priest, a violinist, but most of all a composer. His father, who also played the violin as a musician at the Basilica di San Marco, instructed him in the art of music. " ,
           
        },
        {
            image: "http://www.aboutpisa.info/images-about-pisa/galileo-galilei.jpg",
            celebrityName: "Galileo Galilei",
            description: "Galileo Galilei ( February 1564 - January 1642) , known as the father of Modern Science, Italian physicist, mathematician, astronomer and philosopher, was born in Pisa.His contributions include the discovery of the four largest satellites of Jupiter, that were named Galilean moons in his honor, the observation and analysis of sunspots, the telescopic confirmation of the phases of Venus, the improving of the compass design." ,
            
        }  
    ]
}

export const getCities = () => {
    return database.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}
export const getLandmarks = () => {
    return database.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}
export const getCelebrities = () => {
    return database.celebrities.map(copyOfSingleCelebrityObject => ({...copyOfSingleCelebrityObject}))
}