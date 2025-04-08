export const fetchGoods = async () => {
  try {
    const response = await fetch('/goodsDB.json'); // toDo
    const goodsArr = await response.json();

    return goodsArr;
  } catch (error) {
    console.error('Ошибка при получении товаров: ', error);
  }
};
