function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

btnChangeColor.addEventListener('click', event => {
  const RandomHexColor = getRandomHexColor();
  console.log(RandomHexColor);
  bodyColor.style.backgroundColor = RandomHexColor;
  color.textContent = RandomHexColor;
});
