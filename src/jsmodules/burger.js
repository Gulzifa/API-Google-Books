
const menu = document.querySelector('.categories');
const menuBtn = document.querySelector('.categories__burger');

export function showCategories() {
    if (menu && menuBtn) {
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('show-menu')
    })}
}