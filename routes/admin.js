const { Router } = require('express');
const checkAuth = require('../checkAuth');
const router = Router();
const db = require('../config/db')

router.get('/admin', checkAuth, (req, res) => {
    let sql = 'SELECT * from songdata'
    db.query(sql, (e, result) => {
        if (e) {
            throw e
        }
        res.render('admin', {user: req.user, songData: result, NavTitle: 'Song Management'})
    })
})

router.post('/adminValidation', checkAuth, (req, res) => {
    console.log(req.body);
})

module.exports = router