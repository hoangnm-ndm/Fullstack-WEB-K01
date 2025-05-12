import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// * const appElement = document.getElementById("root");
// * const virtualDOM = ReactDOM.createRoot(appElement);
// * virtualDOM.render(<h1>Xin chao ca lop!</h1>);
// DOM ảo mới so sánh với DOM ảo cũ bằng cơ chế diffing.
