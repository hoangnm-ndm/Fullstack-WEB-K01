import { ToastContainer } from "react-toastify";
import "./App.css";
import Routes from "./router";

function App() {
	return (
		<>
			<Routes />
			<ToastContainer />
		</>
	);
}

export default App;
