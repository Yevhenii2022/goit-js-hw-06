const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

let amount;

divBoxesEl.style.display = 'flex';
divBoxesEl.style.gap = '5px';
divBoxesEl.style.flexWrap = 'wrap';
divBoxesEl.style.alignItems = 'center';

inputEl.addEventListener('input', handleInputElInput);
btnCreateEl.addEventListener('click', handleBtnCreateElClick);
btnDestroyEl.addEventListener('click', handleBtnDestroyElClick);

function handleInputElInput(event) {
	amount = event.target.value;
}

function handleBtnCreateElClick(event) {
	createBoxes(amount);
}

function handleBtnDestroyElClick(event) {
	destroyBoxes();
}

function createBoxes(amount) {
	let width = 30;
	let heigth = 30;
	let nodeString = '';

	function addBoxHtml(w, h) {
		return `<div style="width: ${width}px; height: ${heigth}px; background-color: ${getRandomHexColor()};"></div>`;
	}

	for (let i = 0; i < amount; i += 1) {
		nodeString += addBoxHtml(width, heigth);
		width += 10;
		heigth += 10;
	}

	divBoxesEl.insertAdjacentHTML('afterbegin', nodeString);
}

function destroyBoxes() {
	divBoxesEl.innerHTML = '';
	inputEl.value = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
