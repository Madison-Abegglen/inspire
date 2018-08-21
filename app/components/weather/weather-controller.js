import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()


function draw(data) {
    document.getElementById('weather').innerHTML = `${(data.temp)}°`
}

export default class WeatherController {
    constructor() {
        //this will fire off get weather right away
        weatherService.getWeather(draw)
    }
}
