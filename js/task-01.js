const itemRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemRef.length}`);
itemRef.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
