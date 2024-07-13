const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = "&copy" + today.getFullYear();
lastModified.innerHTML = "Last Modified: " + document.lastModified;

// Wind Chill with Fairenhieght Formula
function calculateWindChill(tempFahrenheit, windSpeedMph) {
    const windChill = 35.74 + 0.6215 * tempFahrenheit - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempFahrenheit * Math.pow(windSpeedMph, 0.16);
    return windChill;
}

// Use the function to add to the html
const temperature = 75; // Fahrenheit
const windSpeed = 4; // mph
const result = Math.round(calculateWindChill(temperature, windSpeed));
const windChill = document.querySelector("#windChill");

if (temperature <= 50 && windSpeed > 3) {
    chill = result - temperature + " °F";
} else {
    chill = "N/A";
}

windChill.innerHTML = chill