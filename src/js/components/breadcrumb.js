import {layout} from './layout.js';

const breadcrumbTitles = {
  main: 'Главная',
  favorite: 'Избранное',
  snaryazhenie: 'Снаряжение',
  odezhda: 'Одежда',
  zashita: 'Защита',
  snoubord: 'Сноуборд',
  snoubordy: 'Сноуборды',
  termobelyyo: 'Термобельё',
  lyzhi: 'Лыжи',
  kurtka: 'Куртка',
  shtany: 'Штаны',
  shlem: 'Шлем',
  botinki: 'Ботинки',
};

export const breadcrumb = () => {
  const path = window.location.pathname;
  const parts = path.split('/').filter(Boolean);
  let accumulatedPath = '';

  const el = document.createElement('div');
  el.className = 'breadcrumb';

  const nav = document.createElement('nav');
  nav.className = 'breadcrumb__nav';

  const ul = document.createElement('ul');
  ul.className = 'breadcrumb__list';

  const mainLi = document.createElement('li');
  mainLi.className = 'breadcrumb__item';

  const mainLink = document.createElement('a');
  mainLink.className = 'breadcrumb__link';
  mainLink.href = '/';
  mainLink.textContent = breadcrumbTitles.main;

  mainLi.append(mainLink);

  ul.append(mainLi);

  if (parts[0] === '') parts.shift();
  parts.forEach(part => {
    const isLast = part === parts[parts.length - 1];
    accumulatedPath += `/${part}`;
    const li = document.createElement('li');
    li.className = 'breadcrumb__item';

    if (isLast) {
      if (!isNaN(part)) return; // чтобы не отображать id товара

      const span = document.createElement('span');
      span.className = 'breadcrumb__link';
      span.textContent = breadcrumbTitles[part] || part;
      li.append(span);
    } else {
      const link = document.createElement('a');
      link.className = 'breadcrumb__link';
      link.href = accumulatedPath; // toDO уточнить ссылки
      link.textContent = breadcrumbTitles[part] || part;
      li.append(link);
    }

    ul.append(li);
  });

  nav.append(ul);

  el.append(layout('breadcrumb__container', nav));

  return el;
};
