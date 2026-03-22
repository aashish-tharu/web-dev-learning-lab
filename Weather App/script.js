
function getWeather() {
    const city = document.getElementById("cityInput").value;

    const apiKey = "9a38287f5af3366873d96a7e6a4fd1b0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        document.getElementById("temperature").textContent = data.main.temp + "°C";
        document.getElementById("condition").textContent = data.weather[0].description;
        document.getElementById("date").textContent = new Date().toDateString();
        document.getElementById("pressure").textContent = data.main.pressure + " hPa";
        document.getElementById("wind").textContent = data.wind.speed + " m/s";
        document.getElementById("visibility").textContent = data.visibility + " m";
    })
    .catch(error => {
        alert("City not found or some error occurred.");
        console.log(error);
    });
}
document.getElementById("cityInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

window.addEventListener('load', ()=>{
    // console.log('browser laoded.')
    
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude);

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
   const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
   fetch(weatherURL)
   .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        document.getElementById("temperature").textContent = data.current_weather.temperature + data.current_weather_units.temperature;
        document.getElementById("wind").textContent = data.current_weather.windspeed + " " + data.current_weather_units.windspeed;
    })
}

getLocation();
})