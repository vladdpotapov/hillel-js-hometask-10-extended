'use strict';

// VARIABLES
const sliderImage       = getSliderElementById('slider__image');
const sliderButtonPrev  = getSliderElementById('slider__button-prev');
const sliderButtonNext  = getSliderElementById('slider__button-next');
const sliderImagesArray = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

let sliderCurrentImageIndex = 0;

// FUNCTOINS
function getSliderElementById(sliderElementId) {
    let sliderElement = document.getElementById(sliderElementId);
    return sliderElement;
}
function slideNext() {
    sliderImage.src = sliderImagesArray[sliderCurrentImageIndex];
    sliderCurrentImageIndex++;
    sliderImage.src = sliderImagesArray[sliderCurrentImageIndex];
}

function slidePrev() {
    sliderImage.src = sliderImagesArray[sliderCurrentImageIndex + 1];
    sliderCurrentImageIndex--;
    sliderImage.src = sliderImagesArray[sliderCurrentImageIndex];
}

function sliderButtonsDisableCheck() {
    if ((sliderCurrentImageIndex) >= (sliderImagesArray.length - 1)) {
        sliderButtonNext.disabled = true;
        sliderButtonPrev.disabled = false;
    }

    if (sliderCurrentImageIndex === 0) {
        sliderButtonNext.disabled = false;
        sliderButtonPrev.disabled = true;
    }
}

// EXECUTION
sliderButtonNext.addEventListener('click', () => {
    slideNext();
    sliderButtonsDisableCheck();
});

sliderButtonPrev.addEventListener('click', () => {
    slidePrev();
    sliderButtonsDisableCheck();
});