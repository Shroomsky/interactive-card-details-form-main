//============================selections==========================//
//inputs selection
const cardHolderInput = document.querySelector("#cardHolderInput");
const cardNumberInput = document.querySelector("#cardNumberInput");
const mmInput = document.querySelector("#inputMM");
const yyInput = document.querySelector("#inputYY");
const cvcInput = document.querySelector("#inputCvc");

//card detail fields selection

const cardNumberImg = document.querySelector("#cardNumberImg");
const cardHolderImg = document.querySelector("#cardHolderImg");
const mmImg = document.querySelector("#mmImg");
const yyImg = document.querySelector("#yyImg");
const cvcImg = document.querySelector("#cvcImg");

//form and button selection

const form = document.querySelector(".form");
const continueBtn = document.querySelector("#contineBtn");

const complete = document.querySelector(".complete");
//============================selections==========================//

//=========================functions=================//

function fieldUpdate(field, input) {
	field.textContent = input.value;
}

function isBlankCheck(value) {
	const regex = /./;
	res = !regex.test(value);
	return res;
}

function inputError() {
	const p = document.createElement("p");
	p.textContent = "Can't be balnk";
	p.classList.add("error");
	p.setAttribute("id", "error");
	return p;
}

function inputValidation(input) {
	if (isBlankCheck(input.value)) {
		if (!input.classList.contains("error")) {
			input.classList.add("error");
			input.parentNode.appendChild(inputError());
		}
		return false;
	} else {
		if (input.classList.contains("error")) {
			input.classList.remove("error");
			let len = input.parentNode.children.length - 1;
			input.parentNode.children[len].remove();
		}
		return true;
	}
}

function expDateValidation() {
	const expdate = document.getElementById("expDate");
	if (!dateValidation(mmInput) || !dateValidation(yyInput)) {
		dateValidation(mmInput);
		dateValidation(yyInput);
		
		if (!expdate.lastChild.previousSibling.classList.contains("error")) {
			mmInput.parentNode.after(inputError());
		}
		return false;
	} else  if (mmInput.parentNode.nextSibling == !(" ")){
		mmInput.parentNode.nextSibling.remove();
		return true;
	
	} else {
		return true;
	}
}

function dateValidation(input) {
	if (isBlankCheck(input.value)) {
		if (!input.classList.contains("error")) {
			input.classList.add("error");
			return false;
		} else if (input.classList.contains("error")) {
			return false;
		}
	} else {
		if (input.classList.contains("error")) {
			input.classList.remove("error");
			return true;
		} else if (!input.classList.contains("error")) {
			return true;
		}
	}
}
// ==================================================

//=============Handler============================//
//card holder update
cardHolderInput.addEventListener("input", (e) => {
	fieldUpdate(cardHolderImg, cardHolderInput);
});

//card date MM  update
mmInput.addEventListener("input", (e) => {
	fieldUpdate(mmImg, mmInput);
});

//card date YY  update
yyInput.addEventListener("input", (e) => {
	fieldUpdate(yyImg, yyInput);
});

//card cvc  update
cardNumberInput.addEventListener("input", (e) => {
	fieldUpdate(cardNumberImg, cardNumberInput);
});

//card number  update
cvcInput.addEventListener("input", (e) => {
	fieldUpdate(cvcImg, cvcInput);
});

// form submit handler
form.addEventListener("submit", function (e) {
	e.preventDefault();
	inputValidation(cardHolderInput);
	inputValidation(cardNumberInput);
	expDateValidation();
	inputValidation(cvcInput);

	// console.log(
	// 	inputValidation(cardHolderInput),
	// 	inputValidation(cardNumberInput),
	// 	expDateValidation(),
	// 	inputValidation(cvcInput)
	// );

	if (
		inputValidation(cardHolderInput) &&
		inputValidation(cardNumberInput) &&
		expDateValidation() &&
		inputValidation(cvcInput)
	) {
		complete.classList.remove("hide-content");
		form.classList.add("hide-content");
	} 
});

//=============Handler============================//
