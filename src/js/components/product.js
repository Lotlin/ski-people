/* eslint-disable max-len */
import {layout} from './layout.js';

export const product = (id) => {
  const productData = { // toDO получение данных по id + данные для слайдера
    'id': 1,
    'price': 5540,
    'collection': 'Снежное скольжение',
    'manufacturer': 'Германия',
    'warranty': '3 года',
    'life': '7 лет',
    'color': 'Бордовый',
    'max_weight': '80 кг',
    'type': 'Сноуборд',
    'img': '/snowboard1.png',
    'name': 'Сноуборд Storm X',
    'section': 'Снаряжение',
  };

  const el = document.createElement('section');
  el.classList.add('product');

  const child = `
    <h2 class="product__title">${productData.name}</h2>

    <div class="product__content">
            <div class="swiper product__slider">
              <div class="swiper-wrapper product__sliders-wrapper">
                <div class="swiper-slide product__slide">
                  <img class="product__slider-img" src="/public/img${productData.img}" alt=${productData.name}>
                </div>

                <div class="swiper-slide product__slide">
                  <img class="product__slider-img" src="/public/img${productData.img}" alt=${productData.name}">
                </div>

                <div class="swiper-slide product__slide">
                  <img class="product__slider-img" src="/public/img${productData.img}" alt=${productData.name}">
                </div>

                <div class="swiper-slide product__slide">
                  <img class="product__slider-img" src="/public/img${productData.img}" alt=${productData.name}">
                </div>
              </div>

              <button
                class="product__slider-arrow product__slider-arrow--prev"
                type="button"
              >
              <svg class="product__slider-arrow-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="currentColor"/>
                <path d="M11.864 16.0001L17.5253 10.1821C17.5719 10.1352 17.6087 10.0796 17.6337 10.0183C17.6587 9.95711 17.6712 9.89155 17.6707 9.82544C17.6701 9.75933 17.6565 9.69398 17.6305 9.63318C17.6045 9.57239 17.5668 9.51734 17.5194 9.47124C17.472 9.42513 17.4159 9.38888 17.3545 9.36458C17.293 9.34028 17.2273 9.32842 17.1612 9.32968C17.0951 9.33094 17.0299 9.34529 16.9694 9.37191C16.9088 9.39854 16.8542 9.43689 16.8086 9.48477L10.8086 15.6514C10.7178 15.7448 10.667 15.8699 10.667 16.0001C10.667 16.1303 10.7178 16.2554 10.8086 16.3488L16.8086 22.5154C16.8542 22.5633 16.9088 22.6017 16.9694 22.6283C17.0299 22.6549 17.0951 22.6693 17.1612 22.6705C17.2273 22.6718 17.293 22.6599 17.3545 22.6356C17.4159 22.6113 17.472 22.5751 17.5194 22.529C17.5668 22.4829 17.6045 22.4278 17.6305 22.367C17.6565 22.3062 17.6701 22.2409 17.6707 22.1748C17.6712 22.1087 17.6587 22.0431 17.6337 21.9819C17.6087 21.9207 17.5719 21.865 17.5253 21.8181L11.864 16.0001Z" fill="#1C1C1C"/>
                </svg>
              </button>

              <button
                class="product__slider-arrow product__slider-arrow--next" 
                type="button"
              >
              <svg class="product__slider-arrow-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="currentColor"/>
                <path d="M20.136 16.0001L14.4747 10.1821C14.4281 10.1352 14.3913 10.0796 14.3663 10.0183C14.3413 9.95711 14.3288 9.89155 14.3293 9.82544C14.3299 9.75933 14.3435 9.69398 14.3695 9.63318C14.3955 9.57239 14.4332 9.51734 14.4806 9.47124C14.528 9.42513 14.5841 9.38888 14.6455 9.36458C14.707 9.34028 14.7727 9.32842 14.8388 9.32968C14.9049 9.33094 14.9701 9.34529 15.0306 9.37191C15.0912 9.39854 15.1458 9.43689 15.1914 9.48477L21.1914 15.6514C21.2822 15.7448 21.333 15.8699 21.333 16.0001C21.333 16.1303 21.2822 16.2554 21.1914 16.3488L15.1914 22.5154C15.1458 22.5633 15.0912 22.6017 15.0306 22.6283C14.9701 22.6549 14.9049 22.6693 14.8388 22.6705C14.7727 22.6718 14.707 22.6599 14.6455 22.6356C14.5841 22.6113 14.528 22.5751 14.4806 22.529C14.4332 22.4829 14.3955 22.4278 14.3695 22.367C14.3435 22.3062 14.3299 22.2409 14.3293 22.1748C14.3288 22.1087 14.3413 22.0431 14.3663 21.9819C14.3913 21.9207 14.4281 21.865 14.4747 21.8181L20.136 16.0001Z" fill="#1C1C1C"/>
                </svg>
              </button>

              <div class="swiper product__slider-thumbnails slider-thumbnails">
                <div class="swiper-wrapper slider-thumbnails__wrapper">
                  <div class="swiper-slide slider-thumbnails__item">
                    <img class="slider-thumbnails__img" src="/public/img${productData.img}" alt=${productData.name}>
                  </div>
  
                  <div class="swiper-slide slider-thumbnails__item">
                    <img class="slider-thumbnails__img" src="/public/img${productData.img}" alt=${productData.name}>
                  </div>
  
                  <div class="swiper-slide slider-thumbnails__item">
                    <img class="slider-thumbnails__img" src="/public/img${productData.img}" alt=${productData.name}>
                  </div>
  
                  <div class="swiper-slide slider-thumbnails__item">
                    <img class="slider-thumbnails__img" src="/public/img${productData.img}" alt=${productData.name}>
                  </div>
                </div>
              </div>
            </div>

            <div class="product__info">
              <p class="product__info-price">${productData.price}\u00A0₽</p>
  
              <div class="product__info-id">арт.\u00A0${productData.id}</div>
  
              <h3 class="product__info-title">Общие характеристики</h3>

              <table class="product__info-table info-table">
                <tr class="info-table__row">
                  <th class="info-table__name">Коллекция</th>
                  <td class="info-table__value">${productData.collection}</td>
                </tr>
                <tr class="info-table__row">
                  <th class="info-table__name">Производитель</th>
                  <td class="info-table__value">${productData.manufacturer}</td>
                </tr>
                <tr class="info-table__row">
                  <th class="info-table__name">Гарантия</th>
                  <td class="info-table__value">${productData.warranty}</td>
                </tr>
                <tr class="info-table__row">
                  <th class="info-table__name">Срок службы</th>
                  <td class="info-table__value">${productData.life}</td>
                </tr>
                <tr class="info-table__row">
                  <th class="info-table__name">Цвет</th>
                  <td class="info-table__value">${productData.color}</td>
                </tr>
                <tr class="info-table__row">
                  <th class="info-table__name">Макс. нагрузка</th>
                  <td class="info-table__value">${productData.max_weight}</td>
                </tr>
              </table>
              <div class="product__info-btns-wrapper">
                <button class="product__info-cart-btn" type="button">В корзину</button>

                <button class="product__info-like-btn like-btn" type="button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
  `;

  el.append(layout('product__container', child));

  return el;
};
