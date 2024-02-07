 function getWeather() {
    const apiKey = 'e6815a18e8b4421c40b8d20434659d0f';
    const city = document.getElementById('locationInput').value.trim();
    if (!city) {
        alert('Please enter a city name.');
        return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const weatherData = JSON.parse(xhr.responseText);
            const temperature = Math.round(weatherData.main.temp - 273.15);
            const humidity = weatherData.main.humidity;
            const windSpeed = weatherData.wind.speed;
            const cloudiness = weatherData.clouds.all;
            const description = weatherData.weather[0].description;
            const weatherElement = document.getElementById('weather');
            weatherElement.innerHTML = `
                <p style='font-size: larger;'>Temperature: ${temperature}°C</p>
                <p style='font-size: larger;'>Description: ${description}</p>
                <p style='font-size: larger;' >Humidity: ${humidity}%</p>
                <p style='font-size: larger;'>Wind Speed: ${windSpeed} m/s</p>
                <p style='font-size: larger;'>Cloudiness: ${cloudiness}%</p>
            `;
        } else {
            console.error('Request failed. Status:', xhr.status);
            alert('Failed to fetch weather data. Please try again later.');
        }
    };
    xhr.send();
}
