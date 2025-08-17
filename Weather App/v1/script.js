
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
