function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send(JSON.stringify({ token: id_token }));
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);
}