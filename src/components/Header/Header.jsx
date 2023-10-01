import { useMediaQuery } from "react-responsive";
import styles from "./Header.module.css";
import cardIcon from "../../assets/images/card-logo.svg";
import MobilebackGroundImg from "../../assets/images/bg-main-mobile.png";
import NotMobilebackGroundImg from "../../assets/images/bg-main-desktop.png";

export function Header({ holderName, cardNumber, MM, YY, CVC }) {
	const notMobile = useMediaQuery({ query: "(min-width:992px)" });
	return (
		<div className={styles.headerContainier}>
			<img
				className={styles.headerImg}
				src={notMobile ? NotMobilebackGroundImg : MobilebackGroundImg}
				alt="background image"
				aria-hidden="true"
			/>

			<div className={`${styles.card_front} ${styles.card}`}>
				<img
					src={cardIcon}
					alt="card logo"
					aria-hidden="true"
					className={styles.card_logo}
				/>
				<section className={styles.card_details}>
					<p className={styles.card_number}> {cardNumber}</p>
					<div className={styles.card_holder}>
						<p>{holderName}</p>
						<p>
							{MM}/{YY}
						</p>
					</div>
				</section>
			</div>

			<div className={`${styles.card_back} ${styles.card}`}>
				<p className={styles.cvc}>{CVC}</p>
			</div>
		</div>
	);
}
