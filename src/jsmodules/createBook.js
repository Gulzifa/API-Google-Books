

const booksWrap = document.querySelector('.books-wrap');

function createBook(book) {
        // создаем book-item
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        // создаем изображение книги
        const bookImage = document.createElement('img');
        bookImage.alt = 'Book image';
        bookImage.classList.add('book-image');
        const thumbnail = book.volumeInfo?.imageLinks?.thumbnail || 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
        bookImage.src = thumbnail;
        bookItem.appendChild(bookImage);

        // информация внутри book-item
        const bookInform = document.createElement('div');
        bookInform.classList.add('book-info');
        bookItem.appendChild(bookInform);

        // информация внутри bookInform
        const bookAutor = document.createElement('p');
        bookAutor.textContent = book.volumeInfo?.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
        bookAutor.classList.add('book-info__autor');
        bookInform.appendChild(bookAutor);

        const bookTitle = document.createElement('h1');
        bookTitle.textContent = book.volumeInfo?.title || 'No title';
        bookTitle.classList.add('book-info__title');
        bookInform.appendChild(bookTitle);

        // рейтинг
        if (book.volumeInfo?.averageRating) {
            const bookRating = document.createElement('div');
            bookRating.classList.add('book-info__rating');
            bookInform.appendChild(bookRating);

            const rating = parseFloat(book.volumeInfo.averageRating);
            const ratingStars = document.createElement('div');
            ratingStars.classList.add('rating-stars');

            const roundedRating = Math.round(rating);
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('span');
                star.classList.add('star-element');
                if (i < roundedRating) {
                    star.classList.add('star-filled');
                } else {
                    star.classList.add('star-empty');
                }
                ratingStars.appendChild(star);
            }
            bookRating.appendChild(ratingStars);

            if (book.volumeInfo?.ratingsCount) {
                const ratingCount = document.createElement('p');
                ratingCount.classList.add('rating-count');
                ratingCount.textContent = `${book.volumeInfo.ratingsCount} review${book.volumeInfo.ratingsCount !== 1 ? 's' : ''}`;
                bookRating.appendChild(ratingCount);
            }
        }

        const bookDescription = document.createElement('p');
        bookDescription.textContent = book.volumeInfo?.description || 'No description';
        bookDescription.classList.add('book-info__description');
        bookInform.appendChild(bookDescription);

        if (book.saleInfo && book.saleInfo.listPrice) {
            const bookPrice = document.createElement('p');
            bookPrice.textContent = `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`;
            bookPrice.classList.add('book-info__price');
            bookInform.appendChild(bookPrice);

            const buyBtn = document.createElement('button');
            buyBtn.textContent = 'Buy now';
            buyBtn.classList.add('book-info__buy-button');
            bookInform.appendChild(buyBtn);
        }

        booksWrap.appendChild(bookItem);
    }

    export {booksWrap, createBook}