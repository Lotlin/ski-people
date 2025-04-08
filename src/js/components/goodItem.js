/* eslint-disable max-len */
export const goodItem = (goodData) => {
  const el = document.createElement('article');
  el.className = ('goods__card card');

  const link = document.createElement('a');
  link.className = 'card__link';
  link.href = '#'; // toDO

  const img = new Image();
  img.className = 'card__img';
  img.src = `/img${goodData.img}`;
  img.alt = goodData.name;

  link.append(img);

  const likeBtn = document.createElement('button');
  likeBtn.className = 'card__like-btn like-btn';
  likeBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  const title = document.createElement('h3');
  title.className = 'card__title';
  title.innerText = goodData.name;

  const price = document.createElement('p');
  price.className = 'card__price';
  price.innerText = `${goodData.price}\u00A0₽`;

  const cartBtn = document.createElement('button');
  cartBtn.className = 'card__cart-btn';
  cartBtn.innerText = 'В корзину';

  el.append(link, likeBtn, title, price, cartBtn);

  return el;
};
