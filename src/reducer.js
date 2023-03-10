const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        const newCartItems = state.productData.find(
            (item) => item.productId == action.payload
        );

        return { ...state, cartItems: [...state.cartItems, newCartItems] };
    }
};

export default reducer;
