const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const listEl = document.querySelector('#ingredients');

const createListEl = ingredients.map(ingredient => {
	const itemEl = document.createElement('li');
	itemEl.textContent = ingredient;
	itemEl.classList.add('item');
	return itemEl;
});

listEl.append(...createListEl);

// const firstItem = document.createElement('li');
// firstItem.textContent = ingredients[0];
// firstItem.classList.add('item');

// const secondItem = document.createElement('li');
// secondItem.textContent = ingredients[1];
// secondItem.classList.add('item');

// const thirdItem = document.createElement('li');
// thirdItem.textContent = ingredients[2];
// thirdItem.classList.add('item');

// const fourthItem = document.createElement('li');
// fourthItem.textContent = ingredients[3];
// fourthItem.classList.add('item');

// const fifthItem = document.createElement('li');
// fifthItem.textContent = ingredients[4];
// fifthItem.classList.add('item');

// const sixthItem = document.createElement('li');
// sixthItem.textContent = ingredients[5];
// sixthItem.classList.add('item');

// list.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem);
