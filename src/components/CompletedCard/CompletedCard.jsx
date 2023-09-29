import completedIcon from "../../assets/images/icon-complete.svg";
import { Button } from "../Button/Button";
import styles from "./CompletedCard.module.css";

export function CompletedCard({
	completed,
	setCardNumber,
	setHolderName,
	setCVC,
	setMM,
	setYY,
}) {
	function handleContinueClik() {
		completed(false);
		setCardNumber("0000 0000 0000 0000");
		setHolderName("Jane Appleseed");
		setMM("00");
		setYY("00");
		setCVC("000");
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
