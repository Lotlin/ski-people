import { API_URL, API_GOODS } from './const.js';

export const fetchGoods = async () => {
  try {
    const response = await fetch(`${API_URL}/${API_GOODS}`);
    const goodsArr = await response.json();

    return goodsArr;
  } catch (error) {
    console.error('Ошибка при получении товаров: ', error);
  }
};
