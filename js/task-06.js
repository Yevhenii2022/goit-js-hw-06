const inputEl = document.querySelector('#validation-input');

const onInputElBlur = event => {
	const lengthEl = event.currentTarget.value.trim().length;

	if (lengthEl === Number(inputEl.dataset.length)) {
		inputEl.classList.add('valid');
	} else {
		inputEl.classList.add('invalid');
	}
};

const onInputElFocus = () => {
	inputEl.classList.remove('invalid', 'valid');
};

inputEl.addEventListener('blur', onInputElBlur);

inputEl.addEventListener('focus', onInputElFocus);
