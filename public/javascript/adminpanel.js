function showMenu(e) {
    let count = e - 1
    document.querySelectorAll('.toggle')[count].classList.toggle('visually-hidden')
}
function hideMenu(e) {
    console.log(e);
    // let count = e - 1
    // console.log(e);
    // document.querySelectorAll('.toggle')[count].classList.toggle('visually-hidden')
}

let alertmsg = document.querySelector('[data-alert]')
if (alertmsg) {
    setTimeout(() => {
        alertmsg.style.display = 'none'
    }, 2000)
}