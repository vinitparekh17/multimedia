const { Router } = require('express');
const playstore = require('google-play-scraper');
const checkAuth = require('../checkAuth');
const router = Router();

router.get("/playstore", checkAuth, (req, res) => {
    let user = req.user;
    // res.sendFile(__dirname + "/components/playstore.html")
    res.render('playstore', {appName: null, user})
})

router.post("/playstore", (req, res) => {

    playstore.search({
        term: req.body.search,
        num: 1

    }).then(Data => {
        let App;

        try {
            App = JSON.parse(JSON.stringify(Data[0]));
            console.log(App.title);
        } catch (error) {
            return;
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