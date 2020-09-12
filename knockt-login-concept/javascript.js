document.getElementById('button').addEventListener('click', event => {
    event.target.classList.add('loading');
    event.target.innerHTML = document.getElementById('loader').innerHTML;
});
