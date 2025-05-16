import { useState } from "react";

const arr1 = [1, 5, 7, 4, 2, 3];
const SortArr = () => {
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
		<div>
			<button id="btn" onClick={() => handleSort("asc")}>
				tang dan
			</button>
			{JSON.stringify(data)}
			<button id="btn" onClick={() => handleSort("desc")}>
				giam dan
			</button>
		</div>
	);
};

export default SortArr;
