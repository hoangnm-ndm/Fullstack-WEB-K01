import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRouter from "./router";

function App() {
	return (
		<>
			<AppRouter />
			<ToastContainer />
		</>
	);
}

export default App;
