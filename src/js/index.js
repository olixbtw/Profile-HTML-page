'use strict';

const ctaForm = document.getElementById('ctaForm');
const sliderControl = document.getElementById('sliderControl');

sliderControl.addEventListener('click', changeSliderSlides)
ctaForm.addEventListener('submit', formSubmitHandler)

function changeSliderSlides(e) {
  let oldClass,
    newClass,
    controlsElement = e.target.parentElement,
    sliderElement = e.target.parentElement.parentElement;

  collectionToArray(controlsElement.getElementsByTagName('li')).forEach((el, i) => {
    if (e.target === el) newClass = `slider--item-active-${i + 1}`;
  });
  sliderElement.classList.forEach(el => {
    if (/slider--item-active-\d/.test(el)) oldClass = el;
  });

  if (oldClass !== newClass) {
    collectionToArray(controlsElement.getElementsByTagName('li')).forEach(el => {
      el.classList.remove('active');
      if (e.target === el) el.classList.add('active');
    });
    sliderElement.classList.remove(oldClass);
    sliderElement.classList.add(newClass);
  }
}

function formSubmitHandler(e) {
  e.preventDefault()
  console.log(e.target)
}

// helper functions
const collectionToArray = (collection) => {
  let arr = [];
  for (let i = 0; i < collection.length; i++) {
    arr[i] = collection[i];
  }
  return arr;
}