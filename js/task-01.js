function getCategoriesNumber() {
	const itemEl = document.querySelectorAll('.item');
	console.log(`Number of categories: ${itemEl.length}`);

	itemEl.forEach(item => {
		console.log(
			`Category: ${item.firstElementChild.textContent} \nElements: ${item.lastElementChild.children.length}`,
		);
	});
}

getCategoriesNumber();

// // First element
// const firstItemEl = document.querySelector('.item');
// const firstTitleEl = firstItemEl.firstElementChild;
// console.log(`Category: ${firstTitleEl.textContent}`);

// const firstListEl = firstTitleEl.nextElementSibling.children;
// console.log(`Elements: ${firstListEl.length}`);

// // Second element
// const secondItemEl = firstItemEl.nextElementSibling;
// const secondTitleEl = secondItemEl.firstElementChild;
// console.log(`Category: ${secondTitleEl.textContent}`);

// const secondListEl = secondTitleEl.nextElementSibling.children;
// console.log(`Elements: ${secondListEl.length}`);

// // Third element
// const categoriesEl = document.querySelector('#categories');
// const lastItemEl = categoriesEl.lastElementChild;
// const lastTitleEl = lastItemEl.firstElementChild;
// console.log(`Category: ${lastTitleEl.textContent}`);

// const lastListEl = lastTitleEl.nextElementSibling.children;
// console.log(`Elements: ${lastListEl.length}`);
