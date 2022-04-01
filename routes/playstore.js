const { Router } = require('express');
const playstore = require('google-play-scraper');
const router = Router();

router.get("/playstore", (req, res) => {
    res.sendFile(__dirname + "/components/playstore.html")
})

router.post("/playstore", (req, res) => {

    playstore.search({
        term: req.body.s,
        num: 1

    }).then(Data => {
        let App;

        try {
            App = JSON.parse(JSON.stringify(Data[0]));

            console.log(Data)
        } catch (error) {
            return res.write("<h1> Error 404: </h1> <br /> <h2> Application not found!</h2>")
        }

        res.render('playstore',
            {
                appName: App.title,
                appDescription: App.summary,
                appIcon: App.icon,
                appValue: App.priceText,
                appScore: App.scoreText,
                appUrl: App.url,
                appDev: App.developer
            })
    })
})

module.exports = router;