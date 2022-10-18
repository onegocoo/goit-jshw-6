const counterRef = document.getElementById('counter');
const valueRef = document.getElementById('value');
const btnAddRef = counterRef.querySelectorAll('button')[1];
const btnRemoveRef = counterRef.querySelectorAll('button')[0];

let counterValue = Number(valueRef.textContent);
btnAddRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});

btnRemoveRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
