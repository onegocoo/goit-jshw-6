function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const btnColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

btnColor.addEventListener('click', event => {
  bodyColor.style.backgroundColor = getRandomHexColor(event.currentTarget);
  color.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});
