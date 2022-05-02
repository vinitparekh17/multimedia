let element = document.querySelector('[data-show]')

if (!navigator.onLine) {
    element.classList.remove('hide')
} else {
    element.classList.add('hide')
}

window.addEventListener('offline', () => {
    element.classList.remove('hide')
})