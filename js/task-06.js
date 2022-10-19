const inputRef = document.querySelector('#validation-input');
const validNum = inputRef.dataset.length;

inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length >= validNum) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
