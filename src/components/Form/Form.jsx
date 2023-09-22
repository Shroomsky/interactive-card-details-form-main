import { Button } from "../Button/Button";
import { Input } from "../Input/Input/";
import styels from "./Form.module.css";
import inputStyles from "../Input/Input.module.css";
import { useState } from "react";

const errorObj = {
	status: false,
	msgBlank: "Can't be blank",
	msgFormat: "Wrong format, numbers only",
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

	function holderNameInputFormatCheck() {
		if (
			holderName == "" ||
			holderName == "Jane Appleseed" ||
			holderName == " "
		) {
			setCardHolderNameError({ ...cardHolderNameError, status: true });
			return true;
		} else {
			setCardHolderNameError({ ...cardHolderNameError, status: false });
			return false;
		}
	}

	function cardNumberInputFormatCheck() {
		if (
			cardNumber == "" ||
			cardNumber == " " ||
			cardNumber == "0000 0000 0000 0000"
		) {
			setCardNnumberError({ ...cardNumberError, status: true });
			return true;
		} else {
			setCardNnumberError({ ...cardNumberError, status: false });
			return false;
		}
	}
	function mmInputCheck() {
		if (MM == "00" || MM == "" || MM == " ") {
			setMmError({ ...mmError, status: true });
			return true;
		} else {
			setMmError({ ...mmError, status: false });
			return false;
		}
	}

	function yyInputCheck() {
		if (YY == "00" || YY == "" || YY == " ") {
			setYyError({ ...yyError, status: true });
			return true;
		} else {
			setYyError({ ...yyError, status: false });
			return false;
		}
	}
	function cvcInputCheck() {
		if (CVC == "000" || CVC == "" || CVC == " ") {
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
		const number = cardNumberInputFormatCheck();
		const mm = mmInputCheck();
		const yy = yyInputCheck();
		const cvc = cvcInputCheck();
		if (!holder && !number && !mm && !yy && !cvc) {
			completed(true);
			setCardNumber("0000 0000 0000 0000");
			setHolderName("Jane Appleseed");
			setMM("00");
			setYY("00");
			setCVC("000");
		}
	}

	return (
		<form className={styels.form} onSubmit={submitHandler}>
			<Input
				updater={setHolderName}
				label={"cardholder name"}
				placeholder={` e.g. Jane Appleseed`}
				error={cardHolderNameError.status}
				errorMsg={cardHolderNameError.msgBlank}
			/>
			<Input
				updater={setCardNumber}
				label={"card number"}
				placeholder={" e.g. 1234 5678 9123 0000"}
				error={cardNumberError.status}
				errorMsg={cardNumberError.msgBlank}
			/>
			<div className={styels.sec_container}>
				<div>
					<label className={inputStyles.label}>Exp. Date (MM/YY)</label>
					<div className={styels.mm_yy}>
						<Input
							error={mmError.status}
							label={null}
							placeholder={"MM"}
							updater={setMM}
						/>
						<Input
							error={yyError.status}
							label={null}
							placeholder={"YY"}
							updater={setYY}
						/>
					</div>
					{mmError.status && (
						<p className={styels.errorMsg}>{mmError.msgBlank}</p>
					)}
					{yyError.status && (
						<p className={styels.errorMsg}>{yyError.msgBlank}</p>
					)}
				</div>
				<div>
					<Input
						error={cvcError.status}
						updater={setCVC}
						label={"CVC"}
						placeholder={"e.g. 123"}
					/>
					{cvcError.status && (
						<p className={styels.errorMsg}>{cvcError.msgBlank}</p>
					)}
				</div>
			</div>
			<Button type="submit">Confirm</Button>
		</form>
	);
}
