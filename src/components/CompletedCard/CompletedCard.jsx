import completedIcon from "../../assets/images/icon-complete.svg";
import { Button } from "../Button/Button";
import styles from "./CompletedCard.module.css";

export function CompletedCard({ completed }) {
	function handleContinueClik() {
		completed(false);
	}
	return (
		<div className={styles.container}>
			<img src={completedIcon} alt="Completed Icon" />
			<h2>thank you!</h2>
			<p>We've added your card details</p>
			<Button type={null} onClik={handleContinueClik}>
				Continue
			</Button>
		</div>
	);
}
