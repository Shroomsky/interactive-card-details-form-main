import styles from "./Input.module.css";
import { useState } from "react";

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
	setFormatCcnError,
	setError,
}) {
	const [inputValue, setIputValue] = useState("");

	function handleInputChange(e) {
		let value = e.target.value;
		let input = value.slice(0, maxLength);

		function ccnFormater(value) {
			if (!isNaN(value)) {
				setFormatCcnError({ ...error, status: true });
				return value;
			} else {
				setFormatCcnError({ ...error, status: false });
				setError({ ...error, status: false });
				return value;
			}
		}

		function ccFormater(value) {
			if (value.length < 19) {
				value = value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
				setError({ ...error, status: false });
				return value;
			} else {
				return value;
			}
		}

		function mm_format(value) {
			if (value.length < 2 || isNaN(value)) {
				setFormatMMError({ ...formatMMError, status: true });
				return value;
			} else {
				setFormatMMError({ ...formatMMError, status: false });
				setError({ ...error, status: false });
				return value;
			}
		}

		function yy_format(value) {
			if (value.length < 2 || isNaN(value)) {
				setFormatYyError({ ...formatYyError, status: true });
				return value;
			} else {
				setFormatYyError({ ...formatYyError, status: false });
				setError({ ...error, status: false });
				return value;
			}
		}

		function cvc_format(value) {
			if (value.length < 3 || isNaN(value)) {
				setFormatCvcError({ ...formatCvcError, status: true });
				return value;
			} else {
				setFormatCvcError({ ...formatCvcError, status: false });
				setError({ ...error, status: false });
				return value;
			}
		}

		if (id === "card number") {
			setIputValue(ccFormater(input));
			updater(ccFormater(input));
		} else if (id === "MM") {
			setIputValue(mm_format(input));
			updater(mm_format(input));
		} else if (id === "YY") {
			setIputValue(yy_format(input));
			updater(yy_format(input));
		} else if (id === "CVC") {
			setIputValue(cvc_format(input));
			updater(cvc_format(input));
		} else if (id === "cardholder name") {
			setIputValue(ccnFormater(input));
			updater(ccnFormater(input));
		}
	}
	return (
		<>
			<label className={styles.label} htmlFor={label}>
				{label}
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
