import React, { useContext } from "react";
import styled from "@emotion/styled";
import { CartContext } from "../contexts/CartContext";

const Cart = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 400px;
	padding: 24px;
	border: 1px solid #bbb;
`;

const CartModal = () => {
	const { state, dispatch } = useContext(CartContext);
	console.log(state.cart);
	return (
		<Cart>
			<div>
				{state.cart.map((item) => (
					<div key={item.id}>
						<h3>{item.title}</h3>
						<p>{item.price}</p>
						<p>{item.quantity}</p>
						<p>{item.quantity * item.price}</p>
					</div>
				))}
			</div>
			<div>Tong thiet hai: {100000}</div>
		</Cart>
	);
};

export default CartModal;
