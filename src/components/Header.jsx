import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CartModal from "./CartModal";
import OtherPage from "../pages/OtherPage";

const Header = () => {
	const { state } = useContext(CartContext);
	const [showModal, setShowModal] = useState(false);
	const countProduct = state.cart.reduce((acc, cur) => (acc += cur.quantity), 0);

	return (
		<div>
			<div>Header</div>
			<OtherPage />
			<button className="btn btn-primary" onClick={() => setShowModal(!showModal)}>
				Gio hang: {countProduct}
			</button>
			{showModal && <CartModal />}
		</div>
	);
};

export default Header;
