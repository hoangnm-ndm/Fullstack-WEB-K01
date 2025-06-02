import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, { cart: [] });
	return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export default CartProvider;
