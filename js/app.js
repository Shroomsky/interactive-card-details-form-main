const cardNumberInput = document.querySelector("#cardNumberInput");
const cardNumberImg = document.querySelector("#card-number");
const cardHolderImg = document.querySelector("#card-holder");
const cardHolderInput = document.querySelector("#cardHolderInput");

const form = document.querySelector("form");

// card holder input handler
cardHolderInput.addEventListener("input", (e) => {
	cardHolderImg.textContent = e.target.value;
});

// card number input handler
cardNumberInput.addEventListener("input", updateValue);
function updateValue(e) {
	let value = e.target.value;
	cardNumberImg.textContent = numberFormat(value);
}

function numberFormat(value) {
	const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
	return value.replace(regex, (regex, $1, $2, $3, $4) =>
		[$1, $2, $3, $4].filter((group) => !!group).join(" ")
	);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
});
