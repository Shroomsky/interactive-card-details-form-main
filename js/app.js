const cardNumberInput = document.querySelector("#cardNumberInput");
const cardNumberImg = document.querySelector("#card-number");
const cardHolderImg = document.querySelector("#card-holder");
const cardHolderInput = document.querySelector("#cardHolderInput");
const errorCardNumber = document.getElementById("errorCardNumber");
const completeCard = document.querySelector(".complete");

const form = document.querySelector("form");

// card holder input handler
cardHolderInput.addEventListener("input", (e) => {
	cardHolderImg.textContent = e.target.value;
});

// card number input handler

cardNumberInput.addEventListener("input", updateValue);
function updateValue(e) {
	let value = e.target.value;
	if (!onlyNumbersCheck(value)) {
		cardNumberImg.textContent = numberFormat(value);
		cardNumberInput.classList.remove("error");
		errorCardNumber.classList.add("hide-content");
	} else {
		console.log("only digits please");
		cardNumberInput.classList.add("error");
		errorCardNumber.classList.remove("hide-content");
	}
}

// check functions

function onlyNumbersCheck(value) {
	const regex = /[a-z]/;
	res = regex.test(value);
	return res;
}

function isBlankCheck(value) {
	const regex = /./;
	res = !regex.test(value);
	return res;
}

function numberFormat(value) {
	const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
	return value.replace(regex, (regex, $1, $2, $3, $4) =>
		[$1, $2, $3, $4].filter((group) => !!group).join(" ")
	);
}

function submitForm() {
	form.classList.toggle("hide-content");
	completeCard.classList.toggle("hide-content");
}

//app start
form.addEventListener("submit", (e) => {
	e.preventDefault();
	submitForm();
});
