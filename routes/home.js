const { Router } = require('express');
const checkAuth = require('../checkAuth');
const router = Router();
router.get('/home', checkAuth, (req, res) => {
    let user = req.user;
    res.render('home', {
        NavTitle: 'Explorer',
        user
    })
})
module.exports = router;