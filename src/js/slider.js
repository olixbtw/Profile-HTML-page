
import { collectionToArray, throttle } from './utils.js'

const slierEl = document.getElementById('slider');
let sliderItems, sliderButtons, sliderBody, sliderControls;


let onSliderScroll = throttle(e => {
  let a = sliderItems.length * (sliderBody.scrollLeft + sliderBody.offsetWidth) / sliderBody.scrollWidth

  setActivePointer(parseInt(a))
}, 500)

function onControlsClick(e) {
  sliderButtons.map((el, index) => {
    if (e.target === el) {
      slideSliderTrack(index)
      // setActivePointer(index)
    }
  })
}

function setActivePointer(tarIndex) {
  sliderButtons.map(e => e.classList.remove('active'))
  sliderButtons[tarIndex].classList.add('active')
}

function slideSliderTrack(tarIndex, e) {
  sliderBody.scroll({
    top: 0,
    left: tarIndex * sliderBody.offsetWidth,
    behavior: 'smooth'
  });
}

function createSlider() {
  let sliderImages = collectionToArray(slierEl.getElementsByTagName('img'));

  if (sliderImages.length) {

    sliderImages = sliderImages.map(e => e.outerHTML)

    slierEl.innerHTML = `
      <ul class="slider__body">
      ${sliderImages.map(e => `
        <li class="slider__item">
          ${e}
        </li>
      `).join('')}
      </ul>
    `;

    slierEl.innerHTML += `
      <ul class="slider__controls container">
        ${sliderImages.map((e, index) => index === 0
      ? `<li class="slider__control-item active"></li>`
      : `<li class="slider__control-item"></li>`).join('')}
      </ul>
    `;

    sliderItems = collectionToArray(slierEl.getElementsByTagName('img'));
    sliderButtons = collectionToArray(slierEl.getElementsByClassName('slider__controls')[0].getElementsByTagName('li'));

    sliderBody = slierEl.getElementsByClassName('slider__body')[0];
    sliderControls = slierEl.getElementsByClassName('slider__controls')[0];

    sliderBody.addEventListener('scroll', onSliderScroll);
    sliderControls.addEventListener('click', onControlsClick);
  }
}

createSlider();