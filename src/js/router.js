import Navigo from 'navigo';
import {header} from './components/header.js';
import {footer} from './components/footer.js';
import {mainLayout} from './components/mainLayout.js';
import {catalog} from './components/catalog.js';
import {goods} from './components/goods.js';
import {title} from './components/title.js';
import {breadcrumb} from './components/breadcrumb.js';
import {product} from './components/product.js';
import {orderMessage} from './components/orderMessage.js';
import {cart} from './components/cart.js';

const router = new Navigo('/', {linksSelector: 'a[href^="/"]'});

export const initRouter = () => {
  document.body.append(header());

  const main = mainLayout();
  document.body.append(main);

  document.body.append(footer());

  router
      .on('/', async () => {
        const goodsElem = await goods();

        main.innerHTML = '';
        main.append(title(), catalog(), goodsElem);

        console.log('home');
      })
      .on('/favorite', async () => { // toDO получение избранных товаров
        const goodsElem = await goods('favorite');

        main.innerHTML = '';
        main.append(title(), breadcrumb(), goodsElem);

        console.log('favorite');
      })
      .on('/:type/:name/:id', (params) => {
        main.innerHTML = '';
        main.append(title(), breadcrumb(), product(params.data.id));
      })
      .on('/order', () => { // toDO поменять
        main.innerHTML = '';
        main.append(orderMessage());
      })
      .on('/cart', async () => {
        const goodsElem = await cart();
        main.innerHTML = '';
        main.append(goodsElem);

        console.log('cart');
      })
      .notFound(() => {
        console.log('ERROR 404');
      });

  router.resolve();
};
