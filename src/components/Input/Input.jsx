import styles from "./Input.module.css";
export function Input({ label, placeholder, updater, error, errorMsg }) {
	function handleInputChange(e) {
		updater(e.target.value);
	}
	return (
		<>
			<label className={styles.label} htmlFor={label}>
				{label}
			</label>
			<input
				onChange={handleInputChange}
				className={`${!error ? styles.input : styles.error}`}
				id={label}
				type="text"
				placeholder={placeholder}
			/>
			{error && <p className={styles.errorMsg}>{errorMsg}</p>}
		</>
	);
}
