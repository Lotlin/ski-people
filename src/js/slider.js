import {Navigation, Thumbs} from 'swiper/modules';
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const thumbnailsSlider = new Swiper('.product__slider-thumbnails', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const productSlider = new Swiper('.product__slider', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.product__slider-arrow--next',
      prevEl: '.product__slider-arrow--prev',
    },
    modules: [Navigation, Thumbs],
    thumbs: {
      swiper: thumbnailsSlider,
    },
  });
});

