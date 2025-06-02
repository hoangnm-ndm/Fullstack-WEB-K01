export default function cartReducer(state, action) {
	switch (action.type) {
		case "UPDATE_CART":
			return {
				...state,
				cart: [...state.cart, action.payload],
			};

		case "REMOVE_CART":
			return; //;

		default:
			return state;
	}
}
