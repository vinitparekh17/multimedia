let WeatherType = document.querySelector('[data-weather]').textContent;


if (WeatherType == 'Clear') {
    document.querySelector(".text-content").background = "black";
} else if (WeatherType == 'Haze') {
    document.querySelector(".text-content").background = "url('../images/haze.jpg')";
} else if (WeatherType == 'Clouds') {
    document.querySelector(".text-content").background = "url('../images/cloudy.jpg')";
} else if (WeatherType == 'Rain') {
    document.querySelector(".text-content").background = "url('../images/rainy.jpg')";
} else if (WeatherType == 'Snow') {
    document.querySelector(".text-content").background = "url('../images/snow.jpg')";
} else if (WeatherType == 'Sunny') {
    document.querySelector(".text-content").background = "url('../images/sunny.jpg')";
} else if (WeatherType == 'Thunderstorm') {
    document.querySelector(".text-content").background = "url('../images/thunderstorm.jpg')";
} else if (WeatherType == 'Windy') {
    document.querySelector(".text-content").background = "url('../images/windy.jpg')";
} else if (WeatherType == 'Fog') {
    document.querySelector(".text-content").background = "url('../images/fogs.jpg')";
} else if (WeatherType == 'Stormy') {
    document.querySelector(".text-content").background = "url('../images/stormy.jpg')";
} else if (WeatherType == 'Tornadoes') {
    document.querySelector(".text-content").background = "url('../images/tornado.jpg')";
} else if (WeatherType == 'Thundersnow') {
    document.querySelector(".text-content").background = "url('../images/thundersnow.jpg')";
} else if (WeatherType == 'Smoke') {
    document.querySelector(".text-content").background = "url('../images/smoke.jpg')";
}
console.log(WeatherType);