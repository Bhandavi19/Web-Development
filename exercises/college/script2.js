const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API Key

async function getWeather() {
    const city = document.getElementById("city-input").value.trim();
    const errorMessage = document.getElementById("error-message");
    const weatherCard = document.getElementById("weather-card");

    if (!city) {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    errorMessage.textContent = "";
    
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        errorMessage.textContent = "City not found. Please enter a valid city.";
        weatherCard.style.display = "none";
    }
}

function displayWeather(data) {
    const weatherCard = document.getElementById("weather-card");

    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("condition").textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherCard.style.display = "block";
}

function getLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherByCoords(latitude, longitude);
        }, () => {
            document.getElementById("error-message").textContent = "Location access denied.";
        });
    } else {
        document.getElementById("error-message").textContent = "Geolocation not supported by your browser.";
    }
}

async function fetchWeatherByCoords(lat, lon) {
    const errorMessage = document.getElementById("error-message");
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("Weather data not found");
        }

        const data = await response.json();
        displayWeather(data);
        errorMessage.textContent = "";
    } catch (error) {
        errorMessage.textContent = "Unable to fetch weather data.";
    }
}
