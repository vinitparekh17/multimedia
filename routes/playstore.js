const { Router } = require('express');
const playstore = require('google-play-scraper');
const checkAuth = require('../checkAuth');
const router = Router();
router.get("/playstore", checkAuth, (req, res) => {
    var user = req.user
    res.render('playstore', {appName: null, user})
})

router.post("/playstore", checkAuth, (req, res) => {
    var user = req.user
    try {
        playstore.search({
            term: req.body.search,
            num: 1

        }).then(Data => {
            let App;

            try {
                App = JSON.parse(JSON.stringify(Data[0]));
                console.log(App);
            } catch (e) {
                return console.log(e);
            }

            res.render('playstore',
                {
                    appName: App.title,
                    appDescription: App.summary,
                    appIcon: App.icon,
                    appValue: App.priceText,
                    appScore: App.scoreText,
                    appUrl: App.url,
                    appDev: App.developer,
                    user
                })
        })
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;