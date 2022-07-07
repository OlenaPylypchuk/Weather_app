     let now = new Date();
     let day = now.getDate();
     if (day<10){
         day = (`0${day}`)
     }
     let month = (now.getMonth())+1;
     if (month<10){
         month = (`0${month}`)
     }
     let year = now.getFullYear();
     let date = document.querySelector("#today-date");
     date.innerHTML=(`${day}/${month}/${year}`);

     let hours = now.getHours();
     if (hours <10){
         hours = (`0${hours}`)
     }
     let minutes = now.getMinutes();
     if (minutes <10) {
         minutes = (`0${minutes}`)
     }
     let currentTime = (`${hours}:${minutes}`);

    
     let days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     let weekDay = days[now.getDay()];
     let dayOfWeek = document.querySelector("#today-weekday");
     dayOfWeek.innerHTML= (`${weekDay} ${currentTime}`);


function yourcity() {
  let cityInput = document.querySelector("#inputCity");
  let cityDisplay = document.querySelector("#location");

  console.log(cityDisplay.innerHTML);
  let city = cityInput.value;

  console.log(`${city} city`);
  let key = "2b253ae4d48093bcb55a56d6a42d8fa1";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(displayWeather);

  function displayWeather(response) {
    console.log(response.data.main.temp_max);
    console.log(response.data.main.temp_min);
    let max = Math.round(response.data.main.temp_max);
    let min = Math.round(response.data.main.temp_min);
    let todayWeather = document.querySelector("#todayTemperature");
    todayWeather.innerHTML = `${max}˚C`;
    let tonightWeather = document.querySelector("#tonightTemperature");
    tonightWeather.innerHTML = `${min}˚C`;
    let country = response.data.sys.country;
    console.log(country);
    cityDisplay.innerHTML = `${cityInput.value} city, ${country}`;
  }
}
let search = document.querySelector("#search");
search.addEventListener("click", yourcity);

function yourLocation() {
  console.log(5);
  navigator.geolocation.getCurrentPosition(showposition);

  function showposition(position) {
    let lat = position.coords.latitude;

    let lon = position.coords.longitude;

    let key = "2b253ae4d48093bcb55a56d6a42d8fa1";
    console.log(key);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    console.log(apiUrl);

    axios.get(apiUrl).then(displayWeather);

    function displayWeather(response) {
      let cityLocation = response.data.name;
      console.log(cityLocation);
      let countryLocation = response.data.sys.country;
      console.log(countryLocation);
      let cityDisplay = document.querySelector("#location");
      cityDisplay.innerHTML = `${cityLocation} city, ${countryLocation}`;

      let max = Math.round(response.data.main.temp_max);
      let min = Math.round(response.data.main.temp_min);
      let todayWeather = document.querySelector("#todayTemperature");
      todayWeather.innerHTML = `${max}˚C`;
      let tonightWeather = document.querySelector("#tonightTemperature");
      tonightWeather.innerHTML = `${min}˚C`;
    }
  }
}

let currentLocation = document.querySelector("#currentLocation");
currentLocation.addEventListener("click", yourLocation);
 
    


  
  