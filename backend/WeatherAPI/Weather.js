const WeatherMSN = require('msn-weather-api');

module.exports={
    getWeather: async () => {
        const weather = new WeatherMSN('en', 'c');
        const current = await weather.getCurrentData('sousse');
        console.log(current);
        const forecast = await weather.getForecastData('sousse', 5);
        console.log(forecast);
        current.weather; // Cloudy
        forecast.weather; // Light Rain
    }
}