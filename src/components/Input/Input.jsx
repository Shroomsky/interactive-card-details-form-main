import styles from "./Input.module.css";
import { useState } from "react";
import { input_formater } from "../../utilis/inputFormater";

export function Input({
	id,
	label,
	placeholder,
	updater,
	error,
	errorMsg,
	maxLength,
	setFormatMMError,
	formatMMError,
	formatYyError,
	setFormatYyError,
	setFormatCvcError,
	formatCvcError,
	setFormatCcHolderError,
	setFormatCcNumberError,
	setError,
}) {
	const [inputValue, setIputValue] = useState("");

	function handleInputChange(e) {
		let value = e.target.value;
		let input = value.slice(0, maxLength);

		function ccnFormater(value) {
			if (!isNaN(value)) {
				setFormatCcHolderError({ ...error, status: true });
				return value;
			} else {
				setFormatCcHolderError({ ...error, status: false });
				setError({ ...error, status: false });
				return value;
			}
		}

		function ccFormater(value) {
			if (isNaN(value.replaceAll(" ", "")) && value.length > 0) {
				setFormatCcNumberError({ ...error, status: true });
				setError({ ...error, status: true });
			} else {
				setFormatCcNumberError({ ...error, status: false });
				setError({ ...error, status: false });
			}
			if (value.length < 19) {
				value = value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
				setError({ ...error, status: false });
				return value;
			} else {
				return value;
			}
		}

		if (id === "card number") {
			setIputValue(ccFormater(input));
			updater(ccFormater(input));
		} else if (id === "MM") {
			let mm = input_formater(
				input,
				2,
				setFormatMMError,
				formatMMError,
				setError,
				error
			);
			setIputValue(mm);
			updater(mm);
		} else if (id === "YY") {
			let yy = input_formater(
				input,
				2,
				setFormatYyError,
				formatYyError,
				setError,
				error
			);
			setIputValue(yy);
			updater(yy);
		} else if (id === "CVC") {
			let cvc = input_formater(
				input,
				3,
				setFormatCvcError,
				formatCvcError,
				setError,
				error
			);
			setIputValue(cvc);
			updater(cvc);
		} else if (id === "cardholder name") {
			setIputValue(ccnFormater(input));
			updater(ccnFormater(input));
		}
	}
	return (
		<>
			<label className={styles.label} htmlFor={label}>
				{id == "MM" || id == "YY" ? "" : label}
			</label>
			<input
				onChange={handleInputChange}
				className={`${!error.status ? styles.input : styles.error}`}
				id={label}
				type="text"
				placeholder={placeholder}
				value={inputValue}
				maxLength={maxLength}
			/>
			{error.status && <p className={styles.errorMsg}>{errorMsg}</p>}
		</>
	);
}
