
import { showCategories } from './burger';
import { booksWrap, createBook } from './createBook';



// Корзинка

const cartIcon = document.querySelector('.header__cart');
const cartCounter = document.querySelector('.header__cart-counter');
let cartCount = 0;


const arrCategories = document.querySelectorAll('.category-link'); // массив категорий
const loadBtn = document.querySelector('.btn__load-books');

let startIndex = 0;
const maxResults = 6;

let loadedBooks = new Set(); // для хранения уникальных id уже загруженных книг

async function loadPage() {

    async function getSelectedBooks(category) {
        try {
            const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=%22subject:${category}%22&key=AIzaSyBVpOv_v2QWwJ7tIBn0l90puNszL3MVqi8&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`);
            const response = await data.json();
            const arrSelectedBooks = response.items || []; // проверка наличия массива items

            if (startIndex === 0) {
                booksWrap.innerHTML = ''; // очищаем контейнер только если startIndex равен 0
                loadedBooks.clear(); // очищаем Set при первой загрузке
            }

            arrSelectedBooks.forEach(book => {
                //проверка, была ли книга уже загружена в Set
                if (!loadedBooks.has(book.id)) {
                    loadedBooks.add(book.id);
                    createBook(book); //создаем элемент книги для каждого элемента arrSelectedBooks
                }
            });
            startIndex += maxResults;
        } catch (error) {
            console.error('Error getting books:', error);
        }
    };
   
    // Обработчики кликов на ссылки категорий
    arrCategories.forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();
            arrCategories.forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');

            const category = link.dataset.category;
            startIndex = 0;
            await getSelectedBooks(category);
            addToCart();
        });
    });

    //Обработчик клика на кнопку "load more"
    loadBtn.addEventListener('click', async () => {
        const category = document.querySelector('.category-link.active').dataset.category;
        await getSelectedBooks(category);
        addToCart();
    });

    //Обработчик клика на кнопку "buy now"
    function addToCart() {
        const buyButtons = document.querySelectorAll('.book-info__buy-button');
        buyButtons.forEach(buyBtn => {
            buyBtn.addEventListener('click', () => {
                buyBtn.classList.add('buy-button-clicked');
                cartCount++; //увеличиваем кол-во книг в корзине
                cartCounter.textContent = cartCount.toString();
                localStorage.setItem('cartCount', cartCount.toString());

                if (cartCount > 0) {
                    cartIcon.style.display = 'block';
                }
            });
        });
    }

    //первая загрузка страницы
    async function firstLoad() {
        startIndex = 0;
        const activeCategory = Array.from(arrCategories).find(category => category.classList.contains('active'));
        if (activeCategory) {
            const category = activeCategory.dataset.category;
            await getSelectedBooks(category);
        } else {
            console.log('No active category found');
        }
        addToCart();
    }

    await firstLoad();
    showCategories();
}

document.addEventListener('DOMContentLoaded', () => {
    loadPage();
    const cartCounter = document.querySelector('.header__cart-counter');
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCounter.textContent = cartCount.toString();
    if (cartCount > 0) {
        cartIcon.style.display = 'block';
    }
});



