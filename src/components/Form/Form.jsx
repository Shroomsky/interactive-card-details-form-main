import { Button } from "../Button/Button";
import { Input } from "../Input/Input/";
import styels from "./Form.module.css";
import inputStyles from "../Input/Input.module.css";
import { useState } from "react";

const errorObj = {
	status: false,
	msgBlank: "Can't be blank",
	msgFormat: "Wrong format",
};

export function Form({
	completed,
	holderName,
	cardNumber,
	setHolderName,
	setCardNumber,
	MM,
	YY,
	CVC,
	setMM,
	setYY,
	setCVC,
}) {
	const [cardHolderNameError, setCardHolderNameError] = useState(errorObj);
	const [cardNumberError, setCardNnumberError] = useState(errorObj);
	const [mmError, setMmError] = useState(errorObj);
	const [yyError, setYyError] = useState(errorObj);
	const [cvcError, setCvcError] = useState(errorObj);
	const [formatMmError, setFormatMmError] = useState(errorObj);
	const [formatYyError, setFormatYyError] = useState(errorObj);
	const [formatCvcError, setFormatCvcError] = useState(errorObj);
	const [formatCcHolderError, setFormatCcHolderError] = useState(errorObj);
	const [formatCcNumberError, setFormatCcNumberError] = useState(errorObj);

	function holderNameInputFormatCheck() {
		if (
			holderName == "" ||
			holderName == "Jane Appleseed" ||
			holderName == " " ||
			!isNaN(holderName)
		) {
			setCardHolderNameError({ ...cardHolderNameError, status: true });
			return true;
		} else {
			setCardHolderNameError({ ...cardHolderNameError, status: false });
			return false;
		}
	}

	// to add Luhn Algorithm -  card number validation.

	function cardNumberInputBlankCheck() {
		if (
			cardNumber == "" ||
			cardNumber == " " ||
			cardNumber == "0000 0000 0000 0000" ||
			isNaN(cardNumber.replaceAll(" ", ""))
		) {
			setCardNnumberError({ ...cardNumberError, status: true });
			return true;
		} else {
			setCardNnumberError({ ...cardNumberError, status: false });
			return false;
		}
	}
	function mmInputCheck() {
		if (MM === "00" || MM === "" || MM === " " || isNaN(MM)) {
			setMmError({ ...mmError, status: true });
			return true;
		} else if (formatMmError.status) {
			setMmError({ ...mmError, status: true });
			true;
		} else {
			setMmError({ ...mmError, status: false });
			return false;
		}
	}

	function yyInputCheck() {
		if (YY == "00" || YY == "" || YY == " " || isNaN(YY)) {
			setYyError({ ...yyError, status: true });
			return true;
		} else if (formatYyError.status) {
			setYyError({ ...yyError, status: true });
			return true;
		} else {
			setYyError({ ...yyError, status: false });
			return false;
		}
	}
	function cvcInputCheck() {
		if (CVC == "000" || CVC == "" || CVC == " " || isNaN(CVC)) {
			setCvcError({ ...cvcError, status: true });
			return true;
		} else if (formatCvcError.status) {
			setCvcError({ ...cvcError, status: true });
			return true;
		} else {
			setCvcError({ ...cvcError, status: false });
			return false;
		}
	}

	function submitHandler(e) {
		e.preventDefault();
		const holder = holderNameInputFormatCheck();
		const number = cardNumberInputBlankCheck();
		const mm = mmInputCheck();
		const yy = yyInputCheck();
		const cvc = cvcInputCheck();

		if (!holder && !number && !mm && !yy && !cvc) {
			let formDetail = {
				cardHolderName: holderName,
				cardNumber: cardNumber,
				mm: MM,
				yy: YY,
				cvc: CVC,
			};
			console.log(formDetail);
			completed(true);
		}
	}

	return (
		<form className={styels.form} onSubmit={submitHandler}>
			<Input
				id={"cardholder name"}
				updater={setHolderName}
				label={"cardholder name"}
				placeholder={` e.g. Jane Appleseed`}
				error={cardHolderNameError}
				errorMsg={
					formatCcHolderError.status
						? cardHolderNameError.msgFormat
						: cardHolderNameError.msgBlank
				}
				setFormatCcHolderError={setFormatCcHolderError}
				setError={setCardHolderNameError}
				maxLength="30"
			/>
			<Input
				id="card number"
				updater={setCardNumber}
				label={"card number"}
				placeholder={" e.g. 1234 5678 9123 0000"}
				error={cardNumberError}
				errorMsg={
					formatCcNumberError.status
						? formatCcNumberError.msgFormat
						: formatCcNumberError.msgBlank
				}
				setFormatCcNumberError={setFormatCcNumberError}
				formatCcNumberError={formatCcNumberError}
				setError={setCardNnumberError}
				maxLength="19"
			/>
			<div className={styels.sec_container}>
				<div>
					<label className={inputStyles.label}>Exp. Date (MM/YY)</label>
					<div className={styels.mm_yy}>
						<Input
							id="MM"
							error={mmError}
							setError={setMmError}
							label={null}
							placeholder={"MM"}
							updater={setMM}
							maxLength="2"
							setFormatMMError={setFormatMmError}
							formatMMError={formatMmError}
						/>
						<Input
							id="YY"
							error={yyError}
							setError={setYyError}
							label={null}
							placeholder={"YY"}
							updater={setYY}
							maxLength="2"
							setFormatYyError={setFormatYyError}
							formatYyError={formatYyError}
						/>
					</div>
					{mmError.status && (
						<p className={styels.errorMsg}>
							{formatMmError.status ? mmError.msgFormat : mmError.msgBlank}
						</p>
					)}
					{yyError.status && !mmError.status && (
						<p className={styels.errorMsg}>
							{formatYyError.status ? yyError.msgFormat : yyError.msgBlank}
						</p>
					)}
				</div>
				<div>
					<Input
						id="CVC"
						error={cvcError}
						setError={setCvcError}
						updater={setCVC}
						label={"CVC"}
						placeholder={"e.g. 123"}
						maxLength="3"
						setFormatCvcError={setFormatCvcError}
						formatCvcError={formatCvcError}
					/>
					{cvcError.status && (
						<p className={styels.errorMsg}>
							{formatCvcError.status ? cvcError.msgFormat : cvcError.msgBlank}
						</p>
					)}
				</div>
			</div>
			<Button type="submit">Confirm</Button>
		</form>
	);
}
