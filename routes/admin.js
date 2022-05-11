const { Router } = require('express');
const router = Router();
const checkAuth = require('../checkAuth');

let err = null
router.get('/admin', checkAuth, (req, res) => {
    res.render('admin', {
        user: req.user,
        NavTitle: 'Admin',
        err: err
    })
})

router.post('/admin', checkAuth, (req, res) => {
    err = "Invalid credentials"
    const { id, password, email } = req.body
    console.log(req.body);
    if (id === '210510110050' && password === 'test123' && email === 'test@example.com') {
        res.redirect('/adminpanel')
    } else {
        res.render('admin', {
            user: req.user,
            NavTitle: 'Admin Signin',
            err: err
        })
    }
})

module.exports = router;