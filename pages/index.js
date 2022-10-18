const initialCards = [
  {
    image: "./images/img1.jpg",
    name: "Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019",
    duration: "2 часа",
    times: ["12:00", "12:00", "12:00", "12:00"],
    costOnline: 900,
    costOffline: 1200
  },
  {
    image: "./images/img1.jpg",
    name: "Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019",
    duration: "2 часа",
    times: ["12:00", "12:00", "12:00", "12:00", "12:00", "12:00"],
    costOnline: 900,
    costOffline: 1200
  }
];

const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.cards');

// Создание пункта времени
function createTime(time) {
  const listItem = document.createElement('li');
  listItem.textContent = time;
  listItem.classList.add('card__time');

  return listItem;
}

// Функция добавления карточки
function addCard(name, image, duration, times, costOnline, costOffline) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  card.querySelector('.card__img').src = image;
  card.querySelector('.card__img').alt = 'Изображение канала';
  card.querySelector('.card__duration-text').textContent = duration;
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__cost-online').textContent = `${costOnline} ₽`;
  card.querySelector('.card__cost-offline').textContent = `${costOffline} ₽ на причале`;

  const timesCard = card.querySelector('.card__times');

  if(times.length <= 4) {

    times.forEach((item) => {
      const time = createTime(item);
      timesCard.append(time);
    });
  }else {
    card.querySelector('.card__times-wrapper').classList.add('card__times-wrapper_hidden');
    times.forEach((item, index) => {

      if(index === 3) {
        const time = createTime('ещё...');
        time.addEventListener('click', (evt) => {
          evt.target.remove();
          card.querySelector('.card__times-wrapper').classList.remove('card__times-wrapper_hidden');
        });

        timesCard.append(time);
      }
        const time = createTime(item);
        timesCard.append(time);
    });
  }

  return card;
}

// Функция для вставки картинки
function insertCard(name, image, duration, times, costOnline, costOffline) {
  const card = addCard(name, image, duration, times, costOnline, costOffline);
  cards.append(card);
}

//Вставляем начальные картинки
initialCards.forEach((card) => {
  insertCard(card.name, card.image, card.duration, card.times, card.costOnline, card.costOffline);
});
