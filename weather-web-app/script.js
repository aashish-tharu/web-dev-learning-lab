const apiKey = "API";

const cityInput = document.getElementById("cityInput");
const temperatureEl = document.getElementById("temperature");
const conditionEl = document.getElementById("condition");
const dateEl = document.getElementById("date");
const pressureEl = document.getElementById("pressure");
const windEl = document.getElementById("wind");
const visibilityEl = document.getElementById("visibility");

function updateUI(data) {
    temperatureEl.textContent = `${data.temp} °C`;
    conditionEl.textContent = data.description;
    dateEl.textContent = new Date().toDateString();
    pressureEl.textContent = `${data.pressure} hPa`;
    windEl.textContent = `${data.wind} m/s`;
    visibilityEl.textContent = `${data.visibility} m`;
}

//fetch weather by city
async function getWeatherByCity(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);

        if (!res.ok) throw new Error("City not found");

        const data = await res.json();

        updateUI({
            temp: data.main.temp,
            description: data.weather[0].description,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            visibility: data.visibility
        });

    } catch (error) {
        alert(error.message);
        console.error(error);
    }
}

// Fetch weather by coordinates (OpenWeather for consistency)
async function getWeatherByCoords(lat, lon) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);

        if (!res.ok) throw new Error("Location weather fetch failed");

        const data = await res.json();

        updateUI({
            temp: data.main.temp,
            description: data.weather[0].description,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            visibility: data.visibility
        });

    } catch (error) {
        console.error(error);
    }
}

function getLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            getWeatherByCoords(latitude, longitude);
        },
        () => {
            alert("Location access denied");
        }
    );
}

cityInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const city = cityInput.value.trim();
        if (city) getWeatherByCity(city);
    }
});

window.addEventListener("load", () => {
    getLocation();
});