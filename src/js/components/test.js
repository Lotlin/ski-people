/* eslint-disable max-len */
import {layout} from './layout.js';

export const catalog = () => {
  const el = document.createElement('div');
  el.classList.add('catalog');

  const child = `
  
  `;

  el.append(layout(child, 'catalog__container'));

  return el;
};
