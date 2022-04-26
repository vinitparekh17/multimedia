const { Router } = require('express');
const router = Router();
const checkAuth = require('../checkAuth');

router.get('adminLogin', checkAuth, (req, res) => {
    res.render('adminlogin', {user: req.user, NavTitle: 'Admin Panel'})
})