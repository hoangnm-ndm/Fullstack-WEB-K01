import React from "react";

function Button({ color, size, children }) {
	// * size: small, medium, big
	// * color: primary, secondary, danger, warning, success

	console.log(children);

	return (
		<>
			<button className={`btn btn-${size}`} style={{ backgroundColor: color }}>
				{children}
			</button>
		</>
	);
}

export default Button;
