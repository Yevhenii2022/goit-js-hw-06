const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

function handleBtnElClick(event) {
	bodyEl.style.backgroundColor = getRandomHexColor();
	spanEl.textContent = getRandomHexColor();
}

btnEl.addEventListener('click', handleBtnElClick);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
