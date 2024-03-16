//your JS code here. If required.
document.getElementById("getWeatherBtn").addEventListener("click", function() {
    // Fetch weather data
    fetchWeatherData();
});

function fetchWeatherData() {
    // API URL for London weather data
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric";

    // Make a GET request to the API
    fetch(apiUrl)
        .then(response => {
            // Check if response is successful
            if (!response.ok) {
                throw new Error("Failed to fetch weather data");
            }
            // Parse response as JSON
            return response.json();
        })
        .then(data => {
            // Extract weather description from the response
            const weatherDescription = data.weather[0].description;

            // Update the weatherData div with the weather information
            document.getElementById("weatherData").innerText = "Current weather in London: " + weatherDescription;
        })
        .catch(error => {
            // Log any errors to the console
            console.error("Error fetching weather data:", error);
        });
}
