import React from "react";

function Button({ size, variant, children }) {
	return (
		<>
			<button className={`btn btn--${size} btn--${variant}`}>{children}</button>
		</>
	);
}

export default Button;

// * size: small, medium, big
// * color: primary, secondary, danger, warning, success
// * các thông tin như size, color, v.v. là properties (các thuộc tính)
// * trong props thì có 1 property đặc biệt là children đóng vai trò làm phần tử con của Component.

// btn--primary
// btn--secondary
// btn--small
// Quy tắc đặt tên BEM
