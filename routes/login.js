const { Router } = require('express');
const router = Router();
const { OAuth2Client } = require('google-auth-library');
let CLIENT_ID = `YOUR_GOOGLE_CLIENT_ID`
const client = new OAuth2Client(CLIENT_ID);

router.get('/', (req, res) => {
    res.status(200).render('login')
})

router.post('/', (req, res) => {
    let token = req.body.token;
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
    }
    verify()
        .then(() => {
            res.cookie('session-token', token,
                {
                    httpOnly: true,
                    maxAge: 3 * 24 * 60 * 60 * 1000
            })
            res.send("success")
        })
        .catch(console.error);
})

router.get('/logout', (req, res) => {
    res.clearCookie('session-token');
    res.redirect('/');
})
module.exports = router;