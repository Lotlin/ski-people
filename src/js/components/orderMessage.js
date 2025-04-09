

export const orderMessage = () => { // toDO передвать данные заказа
  const orderData = { // toDO убрать
    id: 1578,
    price: 17852,
    customer: 'Иванов Петр Александрович',
    phone: '+7 (737) 346 23 00',
    mail: 'Ivanov84@gmail.com',
    address: 'Москва, ул. Ленина, 21, кв. 33',
    paymentMethod: 'Картой при получении',
    pickupMethod: 'Доставка',
  };

  const el = document.createElement('div');
  el.classList.add('order-message');

  const child = `
    <div class="order-message__container">
      <div class="order-message__header">
        <h2 class="order-message__title">Заказ успешно размещен</h2>

        <p class="order-message__price">${orderData.price}\u00A0₽</p>

        <p class="order-message__id">${orderData.id}</p>
      </div>

          <div class="order-message__details">
            <h3 class="order-message__details-title">Данные доставки</h3>

            <table class="order-message__table info-table">
              <tr class="info-table__row">
                <th class="info-table__name">Получатель</th>
                <td class="info-table__value">${orderData.customer}</td>
              </tr>
  
              <tr class="info-table__row">
                <th class="info-table__name">Телефон</th>
                <td class="info-table__value">${orderData.phone}</td>
              </tr>
  
              <tr class="info-table__row">
                <th class="info-table__name">E-mail</th>
                <td class="info-table__value">${orderData.mail}</td>
              </tr>
  
              <tr class="info-table__row">
                <th class="info-table__name">Адрес доставки</th>
                <td class="info-table__value">${orderData.address}</td>
              </tr>
  
              <tr class="info-table__row">
                <th class="info-table__name">Способ оплаты</th>
                <td class="info-table__value">${orderData.paymentMethod}</td>
              </tr>
  
              <tr class="info-table__row">
                <th class="info-table__name">Способ получения</th>
                <td class="info-table__value">${orderData.pickupMethod}</td>
              </tr>
            </table>
          </div>

          <a class="order-message__link" href="/">На главную</a>
        </div>
  `;

  el.innerHTML = child;

  return el;
};
