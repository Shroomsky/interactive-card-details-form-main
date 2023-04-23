const cardNumberInput = document.querySelector("#cardNumberInput");
const cardNumberImg = document.querySelector("#card-number");
const cardHolderImg = document.querySelector("#card-holder");
const mmImg = document.querySelector("#MM");
const yyImg = document.querySelector("#YY");
const cvcImg = document.querySelector("#cvc");
const cardHolderInput = document.querySelector("#cardHolderInput");
const cardHolderfieldset = document.querySelector("#cardHolder");
const errorCardNumber = document.getElementById("errorCardNumber");
const completeCard = document.querySelector(".complete");
const mmInput = document.getElementById("inputMM");
const yyInput = document.getElementById("inputYY");
const cvcInput = document.getElementById("inputCvc");
const expDate = document.querySelector(".expDate");
const form = document.querySelector("form");

function blankInputError() {
	const p = document.createElement("p");
	p.textContent = "Can't be balnk";
	p.classList.add("error");
	return p;
}

// card holder input updater
cardHolderInput.addEventListener("input", (e) => {
	cardHolderImg.textContent = e.target.value;
});
// card holder input updater

// MM input updater
mmInput.addEventListener("input", (e) => {
	mmImg.textContent = e.target.value;
});
// MM input updater

// YY input updater
yyInput.addEventListener("input", (e) => {
	yyImg.textContent = e.target.value;
});
// YY input updater

// CVC input updater
cvcInput.addEventListener("input", (e) => {
	cvcImg.textContent = e.target.value;
});
// CVC input updater

// card number input handler

cardNumberInput.addEventListener("input", updateValue);
function updateValue(e) {
	let value = e.target.value;
	if (!onlyNumbersCheck(value)) {
		cardNumberImg.textContent = numberFormat(value);
		cardNumberInput.classList.remove("error");
		errorCardNumber.classList.add("hide-content");
	} else {
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

function submitFormShow() {
	form.classList.toggle("hide-content");
	completeCard.classList.toggle("hide-content");
	mmInputCheck();
}
function inputToNumber(input) {
	number = parseInt(input.value);
	return number;
}
// MM input handler
function mmInputCheck() {
	if (!isBlankCheck(mmInput.value) && inputToNumber(mmInput) === number) {
		return true;
	} else if(!yyInput.classList.contains("error") || !mmInput.classList.contains("error")){
		mmInput.classList.add("error");
		let error = blankInputError();
		expDate.append(error);
		return false;
	}
}

// YY input handler

function yyInputCheck() {
	if (!isBlankCheck(yyInput.value) && inputToNumber(yyInput) === number) {
		return true;
	} else if(!yyInput.classList.contains("error") || !mmInput.classList.contains("error")){
		yyInput.classList.add("error");
		let error = blankInputError();
		expDate.append(error);
		return false;
	}
}

// cvc input handler
function cvcInputCheck() {
	if (!isBlankCheck(cvcInput.value) && inputToNumber(cvcInput) === number) {
		return true;
	} else if (!cvcInput.classList.contains("error")) {
		cvcInput.classList.add("error");
		let error = blankInputError();
		const cvcContaner = document.querySelector(".cvc__container");
		cvcContaner.append(error);
		return false;
	}
}

// cvc input handler

// card holder name handler

function cardHolderCheck() {
	if (!isBlankCheck(cardHolderInput.value)) {
		return true;
	} else if (!cardHolderInput.classList.contains("error")) {
		cardHolderInput.classList.add("error");
		let error = blankInputError();
		cardHolderfieldset.append(error);
		return false;
	}
}

//app start
form.addEventListener("submit", (e) => {
	e.preventDefault();
	mmInputCheck();
	yyInputCheck();
	cvcInputCheck();
	cardHolderCheck();
	// submitFormShow();
});
