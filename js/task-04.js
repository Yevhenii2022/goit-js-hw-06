let counterValue = 0;

const spanEl = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');

decrementBtn.addEventListener('click', () => {
	counterValue -= 1;
	spanEl.textContent = counterValue;
});

const incrementBtn = document.querySelector('[data-action="increment"]');

incrementBtn.addEventListener('click', () => {
	counterValue += 1;
	spanEl.textContent = counterValue;
});
