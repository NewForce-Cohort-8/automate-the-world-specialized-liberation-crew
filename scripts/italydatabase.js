
const database = {
    cities: [
        {
            image: "https://www.tastingtable.com/img/gallery/14-foods-and-wines-you-have-to-try-in-rome-italy/intro-1667405524.webp",
            cityName: "Rome",
            description: `Rome was called the “Eternal City” by the ancient Romans because they believed that no matter what happened in the rest of the world, the city of Rome would always remain standing. Exploring the city center by foot surrounded by glorious monuments and colossal remains takes you back in time to the “glory that was Rome”` ,
            
        },
        {
            image: "https://teeturtle-s3-web.s3.amazonaws.com/accounts/1/products/1986199883781/PXR-Fin-Noggin-Dude_4200x4200_SEPS-1000x1000.jpg",
            cityName: "Venice",
            description: "Cowabunga" ,
           
        },
        {
            image: "https://i.ebayimg.com/images/g/RvQAAOSwH6tZjnK-/s-l1600.jpg",
            cityName: "Pisa",
            description: "Cowabunga" ,
            
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