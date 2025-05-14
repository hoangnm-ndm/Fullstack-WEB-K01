import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//* Không dùng JSX
const divElement = React.createElement(
	"div",
	{ id: "container", className: "container", style: { backgroundColor: "red" } },
	React.createElement("h1", { className: "title" }, "Hello ca lop"),
	React.createElement("p", { className: "description" }, "Mo ta chinh cua trang")
);

// * Dùng JSX
const div2Element = (
	<div id="container" className="container" style={{ backgroundColor: "red" }}>
		<h1 className="title">Hello ca lop</h1>
		<p className="description">Mo ta chinh cua trang</p>
	</div>
);

const div3Element = (
	<div id="container" className="container" style={{ backgroundColor: "green" }}>
		<h1 className="title">Hello ca lop</h1>
		<p className="description">Mo ta chinh cua trang</p>
		<input type="text" />
	</div>
);

function App2() {
	return divElement;
}

/**
 ** JSX = JavaScript XML
 ** - JSX là cú pháp mở rộng của JavaScript cho phép bạn viết HTML trong JavaScript.
 ** Khi chưa có JSX:
 ** React.createElement("html tag name", { object attributes}, children)
 **	- html tag name: tên thẻ html
 **	- object attributes: các thuộc tính của thẻ html
 **	- children: các thẻ con bên trong thẻ html hoặc là content của thẻ.
 */

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// const appElement = document.getElementById("root");
// const virtualDOM = ReactDOM.createRoot(appElement);
// virtualDOM.render("<h1>Xin chao ca lop!</h1>");

// appElement.innerHTML = "<h1>Xin chao ca lop!</h1>";

// * const appElement = document.getElementById("root");
// * const virtualDOM = ReactDOM.createRoot(appElement);
// * virtualDOM.render(<h1>Xin chao ca lop!</h1>);
// * DOM ảo mới so sánh với DOM ảo cũ bằng cơ chế diffing.
