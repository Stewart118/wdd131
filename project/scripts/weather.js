function calculateWindChill(temperature, windSpeed) {
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

const temperature = parseFloat(document.querySelector("#temperature").textContent);
const windSpeed = parseFloat(document.querySelector("#wind-speed").textContent);
let windChill = document.querySelector("#wind-chill");

windChill.textContent = temperature <= 50 && windSpeed > 3 ? `${calculateWindChill(temperature, windSpeed)}°` : "N/A";

const weatherIcon = document.querySelector("#weather-icon");
const weatherHeader = document.querySelector("#weather-header");

