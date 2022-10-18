const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);
console.log(spanRef.textContent);
function onInputChange(event) {
  if (event.currentTarget.value.length !== 0) {
    spanRef.textContent = event.currentTarget.value;
  } else {
    spanRef.textContent = 'Anonymous';
  }
}
