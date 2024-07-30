const WeatherMSN = require('msn-weather-api');

module.exports={
    getWeather: async (req,res) => {
        const weather = new WeatherMSN('en', 'c');
        const current = await weather.getCurrentData('sousse');
        const forecast= await weather.getForecastData('sousse', 3)
        const forecast1 = await weather.getForecastData('sousse', 4)
        const forecast2 = await weather.getForecastData('sousse', 5)
        current.weather; // Cloudy
        forecast.weather;
        forecast1.weather;
        forecast2.weather;
        res.send([current,forecast,forecast1,forecast2])
    }
}