let counterResult = 0;
let counterValue = document.querySelector('span');
const decrement =()=> {counterResult = --counterValue.textContent;};
const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);
const increment = () => {counterResult = ++counterValue.textContent;};
const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', increment);




    
