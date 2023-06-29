// Chemin du fichier de configuration
let urlJson = "conf.json";

// Appel de la fonction getWeather pour obtenir la température de la ville en question
getWeather(urlJson);
setInterval(getWeather,3600000,urlJson);

function getWeather(urlJson){
  // Requete API OpenWeather
    fetch(urlJson)
    .then( response => response.json() )
    .then( json =>{
       let ville = json.ville ;
        console.log(ville);
        let url ="https://api.openweathermap.org/data/2.5/weather?q="+ ville + "&appid=9f95a6c003453e60d88b7172986c0055&units=imperial";  
    fetch(url)
      .then( response => response.json() )
      .then( json => displayResults(json) )
      .catch( error => console.error(`Erreur lors de la récupération des données : ${error.message}`) );
    } )
}

// Affiche les informations dans la page HTML
function displayResults(datas){
    console.log(datas);
   let element2 = document.querySelector(".element2");
   let element3 = document.querySelector(".element3");
   let element4 = document.querySelector(".element4");
   let localisation = datas.name;
console.log(localisation);

   console.log(element2);
    let degres = datas.main.temp;
    let vent = datas.wind;
    console.log(vent);
    let vitesse = vent.speed;
    console.log(vitesse);
    let humidite = datas.main.humidity;
    console.log(humidite);

    let ressenti = datas.main.feels_like;
    console.log(Math.round(fahrenheitToCelcius(ressenti)));
    
    console.log(degres);
    // innerHTML sert a insérer du texte entre les balises HTML
    element2.innerHTML = "<h2>" + localisation +" " + Math.round(fahrenheitToCelcius(degres))+" °C</h2> ";
    element3.innerHTML = "Ressentie " + Math.round(fahrenheitToCelcius(ressenti))+" °C";
    element4.innerHTML = "Humidité " + humidite+" %";

}

// Transfomer des degres fahrenheit en degres celcius
function fahrenheitToCelcius (degres){
    return(( degres - 32) * 5/9);

}
