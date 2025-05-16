// * mô phỏng lại useState của react.
function useState(initialSate) {
	let state = initialSate;
	function setState(callback) {
		if (typeof callback === "function") {
			state = callback(state);
		} else {
			state = callback; // * state + 1
		}
		reRender(state);
	}
	return [state, setState];
}

function reRender(state) {
	console.log("state mới có giá trị là: ", state);
}
const [count, setCount] = useState(0);
console.log("gia tri state luc khoi tao: ", count);

setTimeout(() => {
	setCount(count + 1);
	setCount(count + 1);
	setCount(count + 1);
	setCount(count + 1);
}, 3000);
