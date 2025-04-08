import Navigo from 'navigo';
import {header} from './components/header.js';
import {footer} from './components/footer.js';
import {mainLayout} from './components/mainLayout.js';
import {catalog} from './components/catalog.js';
import {goods} from './components/goods.js';
import {title} from './components/title.js';
import {breadcrumb} from './components/breadcrumb.js';

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
      .notFound(() => {
        console.log('ERROR 404');
      });

  router.resolve();
};
