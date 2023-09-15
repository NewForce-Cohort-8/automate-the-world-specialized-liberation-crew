
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
            image: "https://i.ebayimg.com/images/g/RvQAAOSwH6tZjnK-/s-l1600.jpg",
            landmarkName: "Check out these cool dudes",
            description: "Cowabunga" ,
            
        },
        {
            image: "https://teeturtle-s3-web.s3.amazonaws.com/accounts/1/products/1986199883781/PXR-Fin-Noggin-Dude_4200x4200_SEPS-1000x1000.jpg",
            landmarkName: "Check out these cool dudes",
            description: "Cowabunga" ,
           
        },
        {
            image: "https://i.ebayimg.com/images/g/RvQAAOSwH6tZjnK-/s-l1600.jpg",
            landmarkName: "Check out these cool dudes",
            description: "Cowabunga" ,
            
        }  
    ],
    celebrities: [
        {
            image: "https://i.ebayimg.com/images/g/RvQAAOSwH6tZjnK-/s-l1600.jpg",
            celebrityName: "Check out these cool dudes",
            description: "Cowabunga" ,
            
        },
        {
            image: "https://teeturtle-s3-web.s3.amazonaws.com/accounts/1/products/1986199883781/PXR-Fin-Noggin-Dude_4200x4200_SEPS-1000x1000.jpg",
            celebrityName: "Check out these cool dudes",
            description: "Cowabunga" ,
           
        },
        {
            image: "https://i.ebayimg.com/images/g/RvQAAOSwH6tZjnK-/s-l1600.jpg",
            celebrityName: "Check out these cool dudes",
            description: "Cowabunga" ,
            
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