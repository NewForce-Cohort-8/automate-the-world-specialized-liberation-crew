const database = {
    locations:[

        {   
            cityImage: "https://cdn.britannica.com/65/117665-050-81F2C7BD/Thermopyles-Greece.jpg",

            cityName: "Thermopylae",

            cityInfo: "In this place roughly 2,502 years ago, a battle was joined between a mere 300 Spartans facing off against the hordes of the East. The 300 gallantly fought before being betrayed and surrounded, they then fought to the last man.",

            landmarkImage:"https://images.ctfassets.net/cnu0m8re1exe/1Tlzj4jpeB35uT5wiVFXzz/05eeb742e8004fffb2abdb26e5a3c3ae/shutterstock_116553415.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
            landmark: "Anyone can visit the site today. As this is a battlefield site and not a large archaeological site, it won't take long to see and explore the site (no more than 30 minutes). The main attraction is the Memorial of Leonidas and the 300 Spartans, together with a huge bronze statue of King Leonidas.The statue stands on a massive stone wall with two marble statues of men representing the river Eurotas and Mount Taygetos. There is also a small museum in the area.",

            personImage:"https://nowweexplore.files.wordpress.com/2022/09/markup_4801-4-1.png",
            person: 'A bronze statue of Leonidas was erected at Thermopylae in 1955.[19] A sign, under the statue, reads simply: "ΜΟΛΩΝ ΛΑΒΕ" ("Come and take them"), which was Leonidas laconic reply when Xerxes offered to spare the lives of the Spartans if they gave up their arms.'

        },
        {
            cityImage: "https://cdn.britannica.com/65/114965-050-3C4F95F4/citadel-acropolis-Lindos-Greeks-Romans-Byzantines-Ottomans.jpg",

            cityName: "Rhodes",

            cityInfo: "Rhodes is the largest of the Dodecanese islands of Greece and is their historical capital; it is the ninth largest island in the overall Mediterranean Sea.",

            landmarkImage:"https://transferrhodes.r.worldssl.net/wp-content/uploads/2018/03/RHODES-ISLAND-34306769-600x400.jpg",
            landmark: "The Palace of the Grand Master of the Knights of Rhodes, is a medieval castle in the city of Rhodes, on the island of Rhodes in Greece. It is one of the few examples of Gothic architecture in Greece. The site was previously a citadel of the Knights Hospitaller that functioned as a palace, headquarters, and fortress.",

            personImage:"https://upload.wikimedia.org/wikipedia/commons/4/46/Villiers_de_l_Isle-Adam.jpg",
            person:"Fra' Philippe de Villiers de L'Isle-Adam (1464 – 21 August 1534) was a prominent member of the Knights Hospitaller at Rhodes and later Malta. Having risen to the position of Prior of the Langue of Auvergne, he was elected 44th Grand Master of the Order in 1521."

        },
        {
            cityImage: "https://cdn.britannica.com/66/102266-050-FBDEFCA1/acropolis-city-state-Greece-Athens.jpg",

            cityName: "Athens",

            cityInfo: 'Athens, Modern Greek Athínai, Ancient Greek Athēnai, historic city and capital of Greece. Many of Classical civilization’s intellectual and artistic ideas originated there, and the city is generally considered to be the birthplace of Western civilization.',

            landmarkImage:"https://upload.wikimedia.org/wikipedia/commons/9/93/L%27Olympieion_%28Ath%C3%A8nes%29_%2830776483926%29.jpg",
            landmark:'The Temple of Olympian Zeus (Greek: Ναός του Ολυμπίου Διός, Naós tou Olympíou Diós), also known as the Olympieion or Columns of the Olympian Zeus, is a former colossal temple at the centre of the Greek capital, Athens. It was dedicated to "Olympian Zeus", a name originating from his position as head of the Olympian gods.',
            
            personImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jupiter_Smyrna_Louvre_Ma13.jpg/800px-Jupiter_Smyrna_Louvre_Ma13.jpg",
            person: "Zeus (Ancient Greek: Ζεύς) is the sky and thunder god in ancient Greek religion, who rules as king of the gods on Mount Olympus. His name is cognate with the first syllable of his Roman equivalent Jupiter. "
        }


    ]
}
export const getLocations = () => {
    return database.locations.map(copyOfSingleLocationObject => ({...copyOfSingleLocationObject}))
}