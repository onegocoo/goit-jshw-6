const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsRef = document.querySelector('#ingredients');

const listRef = ingredients
  .map(ingredient => `<li class='item'><p>${ingredient}</p></li>`)
  .join('');

ingredientsRef.insertAdjacentHTML('afterbegin', listRef);

console.log(ingredientsRef);
