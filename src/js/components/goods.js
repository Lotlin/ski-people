import { fetchGoods } from '../api.js';
import { goodItem } from './goodItem.js';
import { layout } from './layout.js';

export const goods = async (favorite = false) => {
  try {
    const goodsArr = await fetchGoods(); // toDO товары из избранного?

    const el = document.createElement('section');
    el.classList.add('goods');

    const children = [];

    if (favorite) {
      const title = document.createElement('h2');
      title.className = 'goods__title';
      title.innerText = 'Избранное';

      children.push(title);
    }

    const goodsList = document.createElement('ul');
    goodsList.className = 'goods__list';

    goodsArr.forEach(good => {
      if (typeof good === 'object' && good !== null && !Array.isArray(good)) {
        const goodItemElem = document.createElement('li');
        goodItemElem.className = 'goods__item';
        const goodElem = goodItem(good);

        goodItemElem.append(goodElem);

        goodsList.append(goodItemElem);
      }
    });

    children.push(goodsList);

    el.append(layout('goods__container', ...children));

    return el;
  } catch (error) {
    console.error('Ошибка загрузки товаров: ', error);
  }
};
