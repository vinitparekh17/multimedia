const { Router } = require('express');
const checkAuth = require('../checkAuth');
const db = require('../config/db');
const router = Router()

router.get('/music', checkAuth, (req, res) => {
    let user = req.user;
    let sql = 'SELECT * from songdata'
    db.query(sql, (e, result) => {
        if (e) {
            throw e
        }
        res.render('music', { user, NavTitle: 'Music', songdata: result })
    })
})

router.get('/getsong', checkAuth, (req, res) => {
    let sql = 'SELECT * from songdata'
    db.query(sql, (e, result) => {
        if (e) {
            throw e
        }
        res.send(result)
    })
})

module.exports = router;