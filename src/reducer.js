const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        const findItem = state.productData.find(
            (item) => item.productId == action.payload.id
        );

        const isExisting = state.cartItems.some(
            (item) => item.productId == findItem.productId
        );

        if (isExisting) {
            // FIX THIS!!
            // NAG DODOBLE PA RIN YUNG TOTAL AMOUNT
            const findItemQuantity = state.cartItems.find(
                (item) => item.productId == findItem.productId
            );
            const updatedQuantity = findItemQuantity.quantity + 1;
            const updatedTotalAmount =
                state.totalAmount + updatedQuantity * findItemQuantity.price;

            const updatedCartitems = {
                ...findItemQuantity,
                quantity: updatedQuantity,
                totalPrice: updatedQuantity * findItemQuantity.price,
            };

            // filter the previous cart items to render the updated quantity of an item
            const filterUniqueItems = state.cartItems.filter(
                (item) => item.productName !== findItem.productName
            );

            return {
                ...state,
                totalItems: state.totalItems + 1,
                totalAmount: updatedTotalAmount - findItemQuantity.price,
                cartItems: [...filterUniqueItems, updatedCartitems],
            };
        }

        // add 1 quantity to new cart items
        const newCartItem = {
            ...findItem,
            quantity: 1,
            totalPrice: findItem.price,
        };

        return {
            ...state,
            totalItems: state.totalItems + 1,
            totalAmount:
                state.totalAmount + action.payload.price * newCartItem.quantity,
            cartItems: [...state.cartItems, newCartItem],
        };
    }

    if (action.type === "REMOVE_TO_CART") {
        const thisProduct = state.cartItems.find(
            (item) => item.productId === action.payload
        );
        const removeItem = state.cartItems.filter(
            (item) => item.productId !== thisProduct.productId
        );

        return {
            ...state,
            totalItems: state.totalItems - thisProduct.quantity,
            totalAmount: state.totalAmount - thisProduct.totalPrice,
            cartItems: removeItem,
        };
    }

    if (action.type === "PLACE_ORDER") {
        console.log("prder placed");
        return {
            ...state,
            cartItems: [],
            totalItems: 0,
            totalAmount: 0,
        };
    }

    if (action.type === "ADD_QUANTITY") {
        const thisProduct = state.cartItems.find(
            (item) => item.productId == action.payload
        );
        const updatedQuantity = {
            ...thisProduct,
            quantity: thisProduct.quantity + 1,
            totalPrice: thisProduct.totalPrice + thisProduct.price,
        };

        const filterUniqueItems = state.cartItems.filter(
            (item) => item.productId !== action.payload
        );

        return {
            ...state,
            totalItems: state.totalItems + 1,
            totalAmount: state.totalAmount + thisProduct.price,
            cartItems: [...filterUniqueItems, updatedQuantity],
        };
    }
    if (action.type === "REMOVE_QUANTITY") {
        const thisProduct = state.cartItems.find(
            (item) => item.productId == action.payload
        );
        const updatedQuantity = {
            ...thisProduct,
            quantity: thisProduct.quantity - 1,
            totalPrice: thisProduct.totalPrice - thisProduct.price,
        };
        const filterUniqueItems = state.cartItems.filter(
            (item) => item.productId !== action.payload
        );

        if (thisProduct.quantity === 1) {
            return { ...state };
        }

        return {
            ...state,
            totalItems: state.totalItems - 1,
            totalAmount: state.totalAmount - thisProduct.price,
            cartItems: [...filterUniqueItems, updatedQuantity],
        };
    }
};

export default reducer;
