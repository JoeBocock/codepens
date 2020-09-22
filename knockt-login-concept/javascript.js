document.getElementById('button').addEventListener('click', event => {
    if (!event.target.classList.contains('spinner')) {
        event.target.classList.add('loading');
        event.target.innerHTML = document.getElementById('loader').innerHTML;
    }
});
