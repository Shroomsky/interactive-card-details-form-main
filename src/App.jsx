import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import { CompletedCard } from "./components/CompletedCard/CompletedCard";
import { useState } from "react";

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
					completed={setIsCompleted}
					holderName={holderName}
					cardNumber={cardNumber}
					setHolderName={setHolderName}
					setCardNumber={setCardNumber}
					setMM={setMM}
					MM={MM}
					YY={YY}
					CVC={CVC}
					setYY={setYY}
					setCVC={setCVC}
				/>
			)}
			{isComplted && <CompletedCard completed={setIsCompleted} />}
		</div>
	);
}
