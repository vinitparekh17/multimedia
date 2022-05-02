const { signedCookie } = require('cookie-parser');
const { Router } = require('express');
const checkAuth = require('../checkAuth');
const router = Router();
const db = require('../config/db')
let sql = 'SELECT * from songdata'

router.get('/adminpanel', checkAuth, (req, res) => {
    db.query(sql, (err, result) => {
        if(err) console.log(err.sqlMessage);
        res.render('adminpanel', { user: req.user, songData: result, NavTitle: 'Song Management', success: null })
    })
})

router.post('/adminpanel', checkAuth, (req, res) => {
    let msg
    let deletebtn = req.body.delete
    let editbtn = req.body.edit
    if (deletebtn) {
        var deleteQuery = `DELETE FROM songdata WHERE songName="${deletebtn}";`
        db.query(deleteQuery, err => {
            if(err) console.log(err.sqlMessage);
            db.query(sql, (err, result) => {
                if(err) console.log(err.sqlMessage);
                msg = `Song has been deleted!`

                res.render('adminpanel', {
                    user: req.user,
                    songData: result,
                    NavTitle: 'Song Management',
                    success: msg
                })
            })

            })
    }

    if (editbtn) {
        let { editsongId, editsongName, editsongThumbnail, editsongURL, cancle } = req.body
        let editQuery = `UPDATE songdata
SET id = ${editsongId}, songName = '${editsongName}', filePath = '${editsongURL}', coverPath='${editsongThumbnail}'
WHERE songName='${editbtn}';`
        db.query(editQuery, err => {
            if(err) console.log(err.sqlMessage);
            db.query(sql, (e, result) => {
                if (e) throw e;
                msg = `Song has been edited!`
                res.render('adminpanel', {
                    user: req.user,
                    songData: result,
                    NavTitle: 'Song Management',
                    success: msg
                })
            })
        })
    }
    let { songName, songURL, songThumbnail, songId } = req.body
    if (songName && songURL && songThumbnail) {
        let insert = `INSERT INTO songdata (id, songName, filePath, coverPath) values(${songId}, "${songName}", "${songURL}", "${songThumbnail}");`
        db.query(insert, err => {
            if(err)  console.log(err.sqlMessage);
            msg = "Song has been added successfully!"
            db.query(sql, (e, result) => {
                if (e) throw e;

                res.render('adminpanel', {
                    user: req.user,
                    songData: result,
                    NavTitle: 'Song Management',
                    success: msg
                })
            })
        })
    }

    if (req.body.cancle) {
        db.query(sql, (e, result) => {
            if (e) throw e;
            res.render('adminpanel', {
                user: req.user,
                songData: result,
                NavTitle: 'Song Management',
                success: null
            })
        })
    }
})

module.exports = router