let elements = document.querySelectorAll('.nav-icon');

Array.from(elements).forEach(element => {
    element.addEventListener('click', event => handleSelection(event));
});

function resetSelection() {
    Array.from(elements).forEach(element => {
        element.classList.remove('selected');
    });
}

function handleSelection(event) {
    resetSelection();

    if (event.target.tagName === 'I') {
        event.path[1].classList.add('selected');
    } else {
        event.target.classList.add('selected');
    }
}
