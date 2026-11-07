

const menu = [
  { name: 'Борщ', price: 90, type: 'суп' },
  { name: 'Пюре с котлетой', price: 150, type: 'горячее' },
  { name: 'Салат', price: 70, type: 'закуска' },
  { name: 'Компот', price: 40, type: 'напиток' },
  { name: 'Пицца', price: 200, type: 'горячее' }
];


const drink = document.querySelector('#drinks')
const findDrink = menu.filter(find => find.type === 'напиток')
const menuEl = document.querySelector('#menu');
const totalEl = document.querySelector('#total');

let total = 0;

let save = null

menu.sort((a, b) => a.price - b.price)

menu.forEach((find) => {
  const card = document.createElement('div');
  card.textContent = `Блюда: ${find.name}, Цена: ${find.price}, Тип: ${find.type}`
  card.dataset.price = find.price;
  card.dataset.type = find.type;
  if(find.price > 100 ){
    card.classList.add('expansive')
  }else if(find.price  < 60 ){
    card.classList.add('cheap')
  }
  
if (find.price === 200){
  save = card.cloneNode(true)
}

total += find.price

if(find.type !== 'напиток'){
    menuEl.append(card)
}
})

const newCard = document.createElement('h3')

newCard.textContent = 'Блюдо дня'

menuEl.prepend(newCard)

totalEl.textContent = `общая стоимость ${total} руб. Количество блюд: ${menu.length} `

if(save){
  menuEl.append(save)
}

findDrink.forEach(find => {
  const drinks = document.createElement('div');
  drinks.textContent = `Напиток ${find.name} цена ${find.price}`
  drink.append(drinks)
})