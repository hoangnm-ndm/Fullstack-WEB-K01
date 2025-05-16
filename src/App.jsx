import { useState } from "react";
import "./App.css";
import SearchStudent from "./SearchStudent";

const arr1 = [1, 5, 7, 4, 2, 3];

function App() {
	const [data, setData] = useState(arr1);
	const handleSort = (sortBy) => {
		console.log(sortBy);
		if (sortBy === "asc") {
			// logic sort
			// * setData(data.toSorted((a, b) => a - b));
			setData([...data].sort((a, b) => a - b));
		} else {
			// logic sort
			// * setData(data.toSorted((a, b) => b - a));
			setData([...data].sort((a, b) => b - a));
		}
	};
	return (
		<>
			<SearchStudent />
			<button id="btn" onClick={() => handleSort("asc")}>
				tang dan
			</button>
			{JSON.stringify(data)}
			<button id="btn" onClick={() => handleSort("desc")}>
				giam dan
			</button>
		</>
	);
}

export default App;
