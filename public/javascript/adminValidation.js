let songName = document.querySelectorAll('input')[0].value
let songURL = document.querySelectorAll('input')[1].value
let songThumbnail = document.querySelectorAll('input')[2].value

function validation() {
    console.log(songName);
    console.log(songURL);
    console.log(songThumbnail);
    // console.log(songURL.slice(-1, -2));
    // if (songURL.slice(-1, -2) !== 'mp3') {
    //     return console.log('Invalid song url provided!')
    // }
    // const isValidPic = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(songThumbnail)
    // if (!isValidPic) {
    //     return alert('Invalid thumbnail url provided!')
    // }

    // let xhr = new XMLHttpRequest();
    // xhr.open('POST', '/adminvalidation');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify({
    //     songName,
    //     songURL,
    //     songThumbnail
    // }));
}