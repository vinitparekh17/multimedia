const { Router } = require('express');
const router = Router();
const checkAuth = require('../checkAuth');
const key = "156ae8a16859d4cd6898848eaffbdcbd";
const https = require('https')

router.get('/weather', checkAuth, (req, res) => {
    let user = req.user;
    res.render('weather', {cityName: null, user})
})

router.post("/weather", (req, res) => {
    let city = req.body.city;

    // date and time
    function manageDate() {
        var date = new Date()
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return `${date.getDate()} ${months[date.getMonth()]} ${days[date.getDay()]} ${date.getFullYear()}`
    }
    var currentTime = manageDate()
    if(!city) return
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    https.get(url, response => {
        response.on("data", data => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            // if (weatherData.cod != 200) {
            //     return window.alert("Invalid input, try again!")
            // }
            console.log(weatherData);
            res.render("weather", {
                cityName: city.slice(0, 1).toUpperCase() + city.slice(1, city.length).toLowerCase(),
                temp: Math.round(weatherData.main.temp - 273.15),
                weatherDescription: weatherData.weather[0].description,
                i2: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                minTemp: weatherData.main.temp_min,
                maxTemp: weatherData.main.temp_max,
                country: weatherData.sys.country,
                time: currentTime
            })
        })
    })
})

module.exports = router;