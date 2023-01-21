const { OAuth2Client } = require('google-auth-library');
let CLIENT_ID = ``;
const client = new OAuth2Client(CLIENT_ID);

const checkAuthenticated = (req, res, next) => {

    let token = req.cookies['session-token'];

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the Google auth that can be accessed by the backend
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
    }
    verify()
        .then(() => {
            req.user = user;
            next();
        })
        .catch(() => {
            res.redirect('/home')
        })

}

module.exports = checkAuthenticated;
