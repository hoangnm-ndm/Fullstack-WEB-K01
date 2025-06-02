import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
	const { state, dispatch } = useContext(CartContext);
	console.log(state);
	return (
		<div>
			<div>Header</div>
			<div>Gio hang: {}</div>
		</div>
	);
};

export default Header;
