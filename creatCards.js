// Создание карточек с товарами

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var renderCards = function (PR) {
  var listItem = makeElement('li', 'good');


  var title = makeElement('h2', 'good__description',  PR.text);
    listItem.appendChild(title);

  var picture = makeElement('img', 'good__image');
  picture.src = PR.imgUrl;
  picture.alt = PR.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'good__price', PR.price + '₽/кг');
  listItem.appendChild(price);

var availabilityClass = 'good--available';
  if (!PR.inStock) {
    availabilityClass = 'good--unavailable';
  }
  listItem.classList.add(availabilityClass);


if (PR.isHit) {
    listItem.classList.add('good--hit');
    var specialPrice = makeElement('p', 'good__special-offer', PR.specialOffer);
    listItem.appendChild(specialPrice);
  }
  
  return listItem;
};

var cardList = document.querySelector('.goods');

for (var i = 0; i < cardsData.length; i++) {
  var cardItem = renderCards(cardsData[i]);
  cardList.appendChild(cardItem);  
}

var cardsData = [
  {
    inStock: true,
    imgUrl: 'gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  }
  ,
  {
    inStock: false,
    imgUrl: 'gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
];


/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/
