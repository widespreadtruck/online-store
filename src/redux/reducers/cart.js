const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = arr => arr.reduce((sum, obj) => {
    return obj.price + sum
}, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            const currentPizzaItems = !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                }
            };

            const items = Object.values(newItems).map( obj => {
                return obj.items
            })
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                //create a new array, put all objects' values from newItems in that array, display the number of items
                totalCount: allPizzas.length,
                // totalPrice: totalPrice,
                totalPrice,
            };

        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };

        case 'DELETE_PIZZA':
            const updatedItems = {
                ...state.items,
            };
            delete updatedItems[action.payload];
            
            return {
                ...state,
                // items: itemToDelete,
                items: updatedItems,
                // [...state.items[action.payload.id]
            };

        default:
            return state;
    };
}

export default cart;