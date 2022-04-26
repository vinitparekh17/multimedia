const { Router } = require('express');
const playstore = require('google-play-scraper');
const checkAuth = require('../checkAuth');
const router = Router();
router.get("/playstore", checkAuth, (req, res) => {
    var user = req.user
    res.render('playstore', { appName: null, user, NavTitle: 'Playstore', err: null })
})

router.post("/playstore", checkAuth, (req, res) => {
    var user = req.user
    let errMsg = null;
        playstore.search({
            term: req.body.search,
            num: 1

        }).then(Data => {
            let App;
            try {
                App = JSON.parse(JSON.stringify(Data[0]));
            } catch (e) {
                errMsg = 'Result not found, check your input and try again!'
                return res.render('playstore', {
                    NavTitle: 'Playstore',
                    err: errMsg,
                    user
                })
            }
            res.render('playstore',
                {
                    NavTitle: 'Playstore',
                    appName: App.title,
                    appDescription: App.summary,
                    appIcon: App.icon,
                    appValue: App.priceText,
                    appScore: App.scoreText,
                    appUrl: App.url,
                    appDev: App.developer,
                    err: errMsg,
                    user
                })

        })
})

module.exports = router;