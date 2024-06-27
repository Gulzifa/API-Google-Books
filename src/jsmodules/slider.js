



function initSlider() {
    let slides = document.querySelectorAll('.slider__image');
    let dots = document.querySelector('.slider__dots');

    let currentSlideIndex = 0; //индекс текущего слайда
    const arrDots = []; //создаем массив и добавим сюда новые точки (согласно кол-ву слайдов)

    function addDots() {
        slides.forEach((slide, index) => {
            let dotItem = document.createElement('div');
            dotItem.className = 'slider__dots-item';
            dots.appendChild(dotItem);
            arrDots.push(dotItem);

            dotItem.addEventListener('click', function () {
                moveSlide(index);
                stopSliderTimer();
            });
        });
        arrDots[0].classList.add('active-dot');
    };
    addDots();

    function moveSlide(slideIndex) {
        slides[currentSlideIndex].classList.remove('active-slide');
        arrDots[currentSlideIndex].classList.remove('active-dot');
        currentSlideIndex = slideIndex; // обновляем номер текущего индекса слайда
        slides[currentSlideIndex].classList.add('active-slide');
        arrDots[currentSlideIndex].classList.add('active-dot');
        stopSliderTimer();
        setTimeout(startSliderTimer, 5000);
    }

    function nextSlide() {
        let newSlideIndex = currentSlideIndex + 1;
        if (newSlideIndex >= slides.length) {
            newSlideIndex = 0;
        };
        moveSlide(newSlideIndex);

    }

    //функция начала таймера 
    let sliderTimer;
    function startSliderTimer() {
        sliderTimer = setInterval(nextSlide, 5000);
    }

    function stopSliderTimer() {
        clearInterval(sliderTimer);
    }

    startSliderTimer();
}

document.addEventListener("DOMContentLoaded", initSlider);