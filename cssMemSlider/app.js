/*jshint esversion: 6 */
const slides = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dot');
const dotItem = document.querySelectorAll('.dot-item');

let index = 0;


function activeSlider(n) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[n].classList.add('active');
}


function activeDot(n) {
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    dots[n].classList.add('active');
}

function prepereSlide(indx) {
    activeSlider(indx);
    activeDot(indx);
}

dotItem.forEach((item, indexDot) => {
    console.log(item);
    item.addEventListener('click', () => {
        index = indexDot;
        prepereSlide(index);
    });
});