const lists = dropContent.querySelectorAll('li>a');
const listName = document.querySelector('main>h1');

lists.forEach(list => {
    list.addEventListener('click', e => {
        e.preventDefault();
        for (const list of lists) {
            list.classList.remove('active');
        }
        list.classList.add('active');
        listName.innerHTML = list.innerText;
        dropContent.setAttribute('data-visible', false);
        iconDropBtn.style.transform = 'rotate(0deg)';
        fetchMovie(list.getAttribute('aria-details'));
    });
});