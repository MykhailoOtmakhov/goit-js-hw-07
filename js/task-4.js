let counterResult = 0;
let counterValue = document.querySelector('span');
const decrement =()=> {counterValue.textContent = --counterResult;};
const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);
const increment = () => {counterValue.textContent = ++counterResult;};
const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', increment);




    
