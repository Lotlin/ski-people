/* eslint-disable max-len */
import { fetchGoods } from '../api.js';
import { layout } from './layout.js';

export const cart = async () => {
  try {
    const allGoodsArr = await fetchGoods(); // toDO товары из корзины
    const goodsArr = allGoodsArr.slice(0, 5); // toDO убрать

    const el = document.createElement('section');
    el.classList.add('cart');

    const children = [];

    const title = document.createElement('h2');
    title.className = 'cart__title';

    if (goodsArr.length) {
      title.innerText = 'Корзина';
      children.push(title);

      const goodsList = document.createElement('ul');
      goodsList.className = 'cart__list';

      goodsArr.forEach(good => {
        if (typeof good === 'object' && good !== null && !Array.isArray(good)) {
          const elem = document.createElement('li');
          elem.className = 'cart__item';

          const item = `
            <article class="cart__good good-cart">
                  <img class="good-cart__img" src="/img${good.img}" alt=${good.name}>
                  <h3 class="good-cart__title">${good.name}</h3>
                  <p class="good-cart__price">${good.price}\u00A0₽</p>
                  <p class="good-cart__id">арт.\u00A0${good.id}</p>
                  <div class="cart__item-counter good-cart__counter item-counter">
                    <button class="item-counter__btn item-counter__btn--minus">-</button>
                    <p class="item-counter__count">${good.count ? good.count : 1}</p>
                    <button class="item-counter__btn item-counter__btn--plus">+</button>
                  </div>
            </article>
          `;

          elem.innerHTML = item;

          goodsList.append(elem);
        }
      });
      children.push(goodsList);

      const deliveryForm = document.createElement('form');
      deliveryForm.className = 'cart__form cart-form';
      deliveryForm.setAttribute('action', '#'); // toDO
      deliveryForm.setAttribute('id', 'cartForm');
      deliveryForm.innerHTML = `
      <h3 class="cart-form__title">Данные для доставки</h3>
  
            <fieldset class="cart-form__inputs">
              <input class="cart-form__input" type="text" placeholder="Фамилия Имя Отчество" name="name">
              <input class="cart-form__input" type="tel" placeholder="Телефон" name="phone">
              <input class="cart-form__input" type="email" placeholder="E-mail" name="email">
              <input class="cart-form__input" type="text" placeholder="Адрес доставки" name="address">
              <textarea class="cart-form__input cart-form__input--textarea" placeholder="Комментарий к заказу" name="comment"></textarea>
            </fieldset>
  
            <fieldset class="cart-form__radios">
              <fieldset class="cart-form__delivery">
                <legend class="cart-form__legend">Доставка</legend>
                <label class="cart-form__label">
                  <input class="cart-form__radio"  type="radio" name="delivery" value="delivery">
                  Доставка
                </label>
                
                <label class="cart-form__label">
                  <input class="cart-form__radio" type="radio" name="delivery" value="pickup">
                  Самовывоз
                </label>
              </fieldset>
  
              <fieldset class="cart-form__payment">
                <legend class="cart-form__legend">Оплата</legend>
                <label class="cart-form__label">
                  <input class="cart-form__radio" type="radio" name="payment" value="card">
                  Картой при получении
                </label>
                
                <label class="cart-form__label">
                  <input class="cart-form__radio" type="radio" name="payment" value="cash">
                  Наличными при получении
                </label>
              </fieldset>
            </fieldset>
      `;

      children.push(deliveryForm);

      const placement = document.createElement('div');
      placement.className = 'cart__placing';
      // todo ф-и длч cart__placing-count и cart__placing-cost
      placement.innerHTML = `
      <h3 class="cart__placing-title">Оформление</h3>

      <div class="cart__placing-info">
        <p class="cart__placing-count">4&nbsp;товара на&nbsp;сумму:</p> 
        <p class="cart__placing-cost">20&nbsp;000&nbsp;₽</p>
      </div>

      <p class="cart__placing-delivery-price">Доставка 0&nbsp;₽</p>

      <button class="cart__placing-btn" type="submit" form="cartForm">Оформить заказ</button>
      `;

      children.push(placement);
    } else {
      title.innerText = 'Корзина пуста';
      children.push(title);
    }

    el.append(layout('cart__container', ...children));

    return el;
  } catch (error) {
    console.error('Ошибка в получении товаров для корзины:', error);
  }
};
