import { useState } from "react";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { CompletedCard } from "./components/CompletedCard/CompletedCard";

import styles from "./App.module.css";

export default function App() {
	const [isComplted, setIsCompleted] = useState(false);
	const [holderName, setHolderName] = useState("Jane Appleseed");
	const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
	const [MM, setMM] = useState("00");
	const [YY, setYY] = useState("00");
	const [CVC, setCVC] = useState("000");

	

	return (
		<div className={styles.app_container}>
			<Header
				holderName={holderName}
				cardNumber={cardNumber}
				MM={MM}
				YY={YY}
				CVC={CVC}
			/>
			{!isComplted && (
				<Form
					setHolderName={setHolderName}
					setCardNumber={setCardNumber}
					setMM={setMM}
					setYY={setYY}
					setCVC={setCVC}
					completed={setIsCompleted}
					holderName={holderName}
					cardNumber={cardNumber}
					MM={MM}
					YY={YY}
					CVC={CVC}
				/>
			)}
			{isComplted && (
				<CompletedCard
					completed={setIsCompleted}
					setHolderName={setHolderName}
					setCardNumber={setCardNumber}
					setMM={setMM}
					setYY={setYY}
					setCVC={setCVC}
				/>
			)}
		</div>
	);
}
