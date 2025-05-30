import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const UserContext = createContext(null);

const data = { tivi: "3 chiec", dat: "3 so do" };

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserContext.Provider value={data}>
		<App />
	</UserContext.Provider>
);
