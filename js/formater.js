import fieldUpdate from "./updatefields.js";
export default function cardNumberFormat() {
	let len = cardNumberInput.value.length;
	let num = cardNumberInput.value;
	if (len == 5) {
		if (!spaceCheck(5)) {
			let str1 = num.slice(0, 4);
			let str2 = num.slice(-1);
			cardNumberInput.value = `${str1} ${str2}`;
			fieldUpdate(cardNumberImg, cardNumberInput);
		}
	} else if (len == 10) {
		if (!spaceCheck(10)) {
			let str1 = num.slice(0, 9);
			let str2 = num.slice(-1);
			cardNumberInput.value = `${str1} ${str2}`;
			fieldUpdate(cardNumberImg, cardNumberInput);
		}
	} else if (len == 15) {
		if (!spaceCheck(15)) {
			let str1 = num.slice(0, 14);
			let str2 = num.slice(-1);
			cardNumberInput.value = `${str1} ${str2}`;
			fieldUpdate(cardNumberImg, cardNumberInput);
		}
	}
}
export function spaceCheck(c) {
	let str = cardNumberInput.value;
	return str.charAt(c - 1) === " ";
}
