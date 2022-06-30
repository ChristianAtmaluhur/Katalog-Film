const dropBtn = document.querySelector('.dropdown-btn');
const dropContent = document.querySelector('.dropdown-content');
const iconDropBtn = dropBtn.querySelector('span');

dropBtn.addEventListener('click', () => {
    const visible = dropContent.getAttribute('data-visible');
    if (visible === 'false') {
        dropContent.setAttribute('data-visible', true);
        iconDropBtn.style.transform = 'rotate(180deg)';
    } else {
        dropContent.setAttribute('data-visible', false);
        iconDropBtn.style.transform = 'rotate(0deg)';
    } 
});