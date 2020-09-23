document.getElementById('burger-menu').addEventListener('click', event => {
    if (event.currentTarget.classList.contains('open')) {
        event.currentTarget.classList.remove('open');
    } else {
        event.currentTarget.classList.add('open');
    }
});
