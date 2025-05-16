import { useState } from "react";
import "./App.css";

function App() {
	// let count = 0;
	let [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
		console.log(count);
	};

	console.log(count);

	return (
		<>
			<button id="btn" onClick={handleClick}>
				Increment {count}
			</button>
		</>
	);
}

export default App;
