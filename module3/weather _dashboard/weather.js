const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");

const weatherCard = document.getElementById("weatherCard");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

// Button click event
searchBtn.addEventListener("click", function () {

    const city = cityInput.value.trim();

    if (city === "") {

        showError("Please enter a city name.");

        return;
    }

    getWeather(city);
});

// Allow Enter key
cityInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        searchBtn.click();
    }
});

// Main weather function
async function getWeather(city) {

    try {

        // Reset previous messages
        error.textContent = "";

        weatherCard.style.display = "none";

        loading.style.display = "block";

        // STEP 1:
        // Convert city name into latitude and longitude

        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoURL);

        // Check API response
        if (!geoResponse.ok) {

            throw new Error("Unable to connect to weather service.");
        }

        const geoData = await geoResponse.json();

        // Check whether city exists
        if (!geoData.results || geoData.results.length === 0) {

            throw new Error(
                "City not found. Please enter a valid city name."
            );
        }

        // Get location information
        const location = geoData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        const foundCity = location.name;

        const country = location.country;

        // STEP 2:
        // Get weather information

        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;

        const weatherResponse = await fetch(weatherURL);

        if (!weatherResponse.ok) {

            throw new Error(
                "Unable to retrieve weather information."
            );
        }

        const weatherData = await weatherResponse.json();

        // Current weather
        const current = weatherData.current;

        // STEP 3:
        // Display weather information

        cityName.textContent =
            `${foundCity}, ${country}`;

        temperature.textContent =
            `${current.temperature_2m} °C`;

        humidity.textContent =
            `${current.relative_humidity_2m} %`;

        wind.textContent =
            `${current.wind_speed_10m} km/h`;

        // Convert weather code
        const weatherInfo =
            getWeatherDescription(current.weather_code);

        condition.textContent =
            weatherInfo.description;

        weatherIcon.textContent =
            weatherInfo.icon;

        // Display card
        weatherCard.style.display = "block";

    }

    catch (errorMessage) {

        showError(errorMessage.message);

    }

    finally {

        // Hide loading message
        loading.style.display = "none";
    }
}

// Weather code conversion
function getWeatherDescription(code) {

    if (code === 0) {

        return {
            description: "Clear Sky",
            icon: "☀️"
        };

    }

    else if (code === 1 || code === 2) {

        return {
            description: "Partly Cloudy",
            icon: "⛅"
        };

    }

    else if (code === 3) {

        return {
            description: "Cloudy",
            icon: "☁️"
        };

    }

    else if (code >= 45 && code <= 48) {

        return {
            description: "Foggy",
            icon: "🌫️"
        };

    }

    else if (code >= 51 && code <= 67) {

        return {
            description: "Rain",
            icon: "🌧️"
        };

    }

    else if (code >= 71 && code <= 77) {

        return {
            description: "Snow",
            icon: "❄️"
        };

    }

    else if (code >= 80 && code <= 82) {

        return {
            description: "Rain Showers",
            icon: "🌦️"
        };

    }

    else if (code >= 95) {

        return {
            description: "Thunderstorm",
            icon: "⛈️"
        };

    }

    else {

        return {
            description: "Unknown Weather",
            icon: "🌤️"
        };
    }
}

// Display error message
function showError(message) {

    error.textContent = message;

    weatherCard.style.display = "none";
}

