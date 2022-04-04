const { OAuth2Client } = require('google-auth-library');
let CLIENT_ID = `326946298299-es2nul9ejjg86ir6d06kauhch4pmjbqv.apps.googleusercontent.com`
const client = new OAuth2Client(CLIENT_ID);

const checkAuthenticated = (req, res, next) => {

    let token = req.cookies['session-token'];

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
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
            res.redirect('/')
        })

}

module.exports = checkAuthenticated;