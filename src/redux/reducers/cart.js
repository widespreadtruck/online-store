import { setPizzas } from '../actions/pizzas';

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

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };

        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };


        case 'REMOVE_CART_ITEM':
            const updatedItems = {
                ...state.items
            }
            const currentTotalPrice = updatedItems[action.payload].totalPrice;
            const currentTotalCount = updatedItems[action.payload].items.length;
            delete updatedItems[action.payload];

            return {
                ...state,
                items: updatedItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };


        default:
            return state;
    };
}

export default cart;