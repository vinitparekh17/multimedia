let WeatherType = document.querySelector('[data-weather]').textContent;
let card = document.querySelector(".text-content")

if (WeatherType == 'Clear') {
    card.style.backgroundImage = "url('../images/clear.jpg')";
} else if (WeatherType == 'Haze') {
    card.style.background = "url('../images/haze.jpg')";
} else if (WeatherType == 'Clouds') {
    card.style.background = "url('../images/cloudy.jpg')";
} else if (WeatherType == 'Rain') {
    card.style.background = "url('../images/rainy.jpg')";
} else if (WeatherType == 'Snow') {
    card.style.background = "url('../images/snow.jpg')";
} else if (WeatherType == 'Sunny') {
    card.style.background = "url('../images/sunny.jpg')";
} else if (WeatherType == 'Thunderstorm') {
    card.style.background = "url('../images/thunderstorm.jpg')";
} else if (WeatherType == 'Windy') {
    card.style.background = "url('../images/windy.jpg')";
} else if (WeatherType == 'Fog') {
    card.style.background = "url('../images/fogs.jpg')";
} else if (WeatherType == 'Stormy') {
    card.style.background = "url('../images/stormy.jpg')";
} else if (WeatherType == 'Tornadoes') {
    card.style.background = "url('../images/tornado.jpg')";
} else if (WeatherType == 'Thundersnow') {
    card.style.background = "url('../images/thundersnow.jpg')";
} else if (WeatherType == 'Smoke') {
    card.style.background = "url('../images/smoke.jpg')";
} else {
    console.log("err")
}
console.log(WeatherType);