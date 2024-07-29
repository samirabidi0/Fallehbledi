const WeatherMSN = require('msn-weather-api');

module.exports={
    getWeather: async (req,res) => {
        const weather = new WeatherMSN('en', 'c');
        const current = await weather.getCurrentData('sousse');
        const forecast = await weather.getForecastData('sousse', 5);
        const forecast1 = await weather.getCurrentData('sousse', 2)
        const forecast2 = await weather.getCurrentData('sousse', 4)
        res.send([current,forecast])
        current.weather; // Cloudy
        forecast.weather; // Light Rain
    }
}