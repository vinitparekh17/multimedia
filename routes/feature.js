const { Router } = require('express');
const checkAuth = require('../checkAuth');
const router = Router();

router.get('/feature', checkAuth ,(req, res) => {
    res.render('feature', {
        user: req.user,
        NavTitle: "Features"
    })
})

module.exports = router