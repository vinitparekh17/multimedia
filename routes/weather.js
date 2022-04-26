const { Router } = require('express');
const router = Router();
const checkAuth = require('../checkAuth');
const key = "156ae8a16859d4cd6898848eaffbdcbd";
const https = require('https')

router.get('/weather', checkAuth, (req, res) => {
    var user = req.user;
    res.render('weather', { cityName: null, NavTitle: 'Weather', user, err: null})
})

var errMsg = null;
router.post("/weather", checkAuth, (req, res) => {
    var user = req.user;
    let city = req.body.city;
    try {
        // date and time
        function manageDate() {
            var date = new Date()
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            return `${date.getDate()} ${months[date.getMonth()]} ${days[date.getDay()]} ${date.getFullYear()}`
        }
        var currentTime = manageDate()
        if (!city) return
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        https.get(url, response => {
            response.on("data", data => {
                let weatherData = JSON.parse(data);
                if (weatherData.cod === 200) {
                    res.render("weather", {
                        NavTitle: 'Weather',
                        cityName: city.slice(0, 1).toUpperCase() + city.slice(1, city.length).toLowerCase(),
                        mainText: weatherData.weather[0].main,
                        temp: Math.round(weatherData.main.temp - 273.15),
                        weatherDescription: weatherData.weather[0].description,
                        i2: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                        minTemp: Math.round(weatherData.main.temp_min - 273.15),
                        maxTemp: Math.round(weatherData.main.temp_max - 273.15),
                        country: weatherData.sys.country,
                        humidity: weatherData.main.humidity,
                        windSpeed: weatherData.wind.speed,
                        time: currentTime,
                        err: errMsg,
                        user
                    })
                } else {
                    errMsg = 'Result not found, check your input and try again!'
                    res.render('weather', {
                        NavTitle: 'Weather',
                        err: errMsg,
                        user
                    })
                }
            })
        })
    } catch (e) {
        console.log("e");
    }
})

module.exports = router;