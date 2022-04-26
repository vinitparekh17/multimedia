const { Router } = require('express');
const checkAuth = require('../checkAuth');
const router = Router();

router.get('/pricing', checkAuth ,(req, res) => {
    var user = req.user
    res.render('pricing', {NavTitle: 'Pricing' , user})
})

module.exports = router