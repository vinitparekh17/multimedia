const { Router } = require('express');
const router = Router();
const key = "156ae8a16859d4cd6898848eaffbdcbd";
const https = require('https')

router.get('/weather', (req, res) => {
    res.sendFile(__dirname + "/components/weather.html")
})

router.post("/weather", (req, res) => {
    let city = req.body.city;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    https.get(url, (response) => {
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            // if (weatherData.cod != 200) {
            //     return res.sendFile(__dirname + "/error.html")
            // }
            console.log(weatherData);
            res.render('weather', {
                data: weatherData
            })
            // res.render("info", {
            //     cityName: city.slice(0, 1).toUpperCase() + city.slice(1, city.length).toLowerCase(),
            //     temp: Math.round(weatherData.main.temp - 273.15),
            //     weatherDescription: weatherData.weather[0].description,
            //     weatherIcon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            //     i2: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            //     feelsLike: Math.round(weatherData.main.feels_like - 273.15),
            //     pressure: weatherData.main.pressure,
            //     humidity: weatherData.main.humidity
            // })
        })
    })
})

module.exports = router;