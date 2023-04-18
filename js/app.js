const cardNumberInput = document.querySelector("#inputCardNumber");
const cardNumberImg = document.querySelector("#card-number");
const cardHolderImg = document.querySelector("#card-holder");
const cardHolderInput = document.querySelector("#inputCardHolder");

const form = document.querySelector("form");

cardHolderInput.addEventListener("input", updateValue)
function updateValue(e) {
   cardHolderImg.textContent = (e.target.value);
}


form.addEventListener("submit", (e) => {
	e.preventDefault();
    mainFn();
});
