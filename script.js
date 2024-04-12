'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function() {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    window.scrollY >= 200 ? header.classList.add("active") :
        header.classList.remove("active");
})
const slider = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const slideCount = slides.length;

// Move to the next slide
function nextSlide() {
    currentSlide++;
    if (currentSlide === slideCount) {
        currentSlide = 0;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Move to the previous slide
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slideCount - 1;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Optional: Autoplay (uncomment to enable)
/*
let intervalId = setInterval(nextSlide, 3000); // Change interval as needed

slider.addEventListener('mouseover', () => clearInterval(intervalId));
slider.addEventListener('mouseout', () => intervalId = setInterval(nextSlide, 3000));
*/