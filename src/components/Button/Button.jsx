import styles from "./Button.module.css";

export function Button({ children, type, onClik }) {
	return (
		<>
			<button onClick={onClik} className={styles.button} type={type}>
				{children}
			</button>
		</>
	);
}
