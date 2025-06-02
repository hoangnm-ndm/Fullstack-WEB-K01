import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ProductListPage from "./pages/ProductListPage";
import Header from "./components/Header";

function countReducer(state, action) {
	switch (action.type) {
		case "TANG":
			// * Tăng theo action.payload
			return state + action.payload;
		case "GIAM":
			return state - action.payload;
		default:
			return state;
	}
}

function App() {
	return (
		<>
			<Header />
			<ProductListPage />
		</>
	);
}

export default App;
