export default function cartReducer(state, action) {
	switch (action.type) {
		case "ADD_TO_CART":
			const existing = state.cart.find((item) => item.id === action.payload.id);
			if (existing) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
					),
				};
			}
			return { ...state, cart: [...state.cart, action.payload] };

		case "REMOVE_CART":
			return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };

		case "INCREMENT":
			return;

		case "DECREMENT":
			return;

		default:
			return state;
	}
}
