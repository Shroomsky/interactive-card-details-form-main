import cardNumberFormat from "./formater.js";
import fieldUpdate from "./updatefields.js";
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

// function cardNumberFormat() {
// 	let len = cardNumberInput.value.length;
// 	let num = cardNumberInput.value;
// 	if (len == 5) {
// 		if (!spaceCheck(5)) {
// 			let str1 = num.slice(0, 4);
// 			let str2 = num.slice(-1);
// 			cardNumberInput.value = `${str1} ${str2}`;
// 			fieldUpdate(cardNumberImg, cardNumberInput);
// 		}
// 	} else if (len == 10) {
// 		if (!spaceCheck(10)) {
// 			let str1 = num.slice(0, 9);
// 			let str2 = num.slice(-1);
// 			cardNumberInput.value = `${str1} ${str2}`;
// 			fieldUpdate(cardNumberImg, cardNumberInput);
// 		}
// 	} else if (len == 15) {
// 		if (!spaceCheck(15)) {
// 			let str1 = num.slice(0, 14);
// 			let str2 = num.slice(-1);
// 			cardNumberInput.value = `${str1} ${str2}`;
// 			fieldUpdate(cardNumberImg, cardNumberInput);
// 		}
// 	}
// }
// function spaceCheck(c) {
// 	str = cardNumberInput.value;
// 	return str.charAt(c - 1) === " ";
// }

function onlyNumbersCheck(value) {
	const regex = /\d/;
	let res = regex.test(value);
	return res;
}

function isBlankCheck(value) {
	const regex = /./;
	let res = !regex.test(value);
	return res;
}

function inputError(message) {
	const p = document.createElement("p");
	p.textContent = message;
	p.classList.add("error");
	p.setAttribute("id", "error");
	return p;
}

function inputValidation(input, type) {
	if (isBlankCheck(input.value)) {
		if (!input.classList.contains("error")) {
			input.classList.add("error");
			input.parentNode.appendChild(inputError("Can't be balnk"));
		}
		return false;
	} else if (input.classList.contains("error")) {
		input.classList.remove("error");
		let len = input.parentNode.children.length - 1;
		input.parentNode.children[len].remove();
		return true;
	}
	if (type == "number") {
		if (!onlyNumbersCheck(input.value)) {
			if (!input.classList.contains("error")) {
				input.classList.add("error");
				input.parentNode.appendChild(inputError("Wrong format. Only digits."));
			}
			return false;
		} else if (input.classList.contains("error")) {
			input.classList.remove("error");
			let len = input.parentNode.children.length - 1;
			input.parentNode.children[len].remove();
		}
		return true;
		//weryfikacja formatu w type txt
	} else if (type == "text") {
		// console.log(onlyNumbersCheck(input.value));
		return true;
	}
}

function expDateValidation() {
	const expdate = document.getElementById("expDate");
	if (!dateValidation(mmInput) || !dateValidation(yyInput)) {
		dateValidation(mmInput);
		dateValidation(yyInput);

		if (!expdate.lastChild.previousSibling.classList.contains("error")) {
			mmInput.parentNode.after(inputError("Can't be balnk"));
		}
		return false;
	} else if (dateValidation(mmInput) && dateValidation(yyInput)) {
		try {
			mmInput.parentNode.nextSibling.remove();
			return true;
		} catch {
			return true;
		}
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

//=============Updaters============================//
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
//card number formater
cardNumberInput.addEventListener("input", (e) => {
	if (e.key !== "Backspace") {
		inputValidation(cardNumberInput, "number");
		cardNumberFormat();
		// console.log(numberFormat(cardNumberInput.value))
	}
});
// form submit handler
form.addEventListener("submit", function (e) {
	e.preventDefault();
	inputValidation(cardHolderInput, "text");
	inputValidation(cardNumberInput, "number");
	expDateValidation();
	inputValidation(cvcInput, "number");

	// console.log(
	// 	inputValidation(cardHolderInput, "text"),
	// 	inputValidation(cardNumberInput, "number"),
	// 	expDateValidation(),
	// 	inputValidation(cvcInput, "number")
	// );

	if (
		inputValidation(cardHolderInput, "text") &&
		inputValidation(cardNumberInput, "number") &&
		expDateValidation() &&
		inputValidation(cvcInput, "number")
	) {
		complete.classList.remove("hide-content");
		form.classList.add("hide-content");
	}
});

//=============Handler============================//
