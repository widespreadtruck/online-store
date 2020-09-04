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

        case 'REMOVE_ONE_ITEM': {
        const oldItems = state.items[action.payload].items;
        const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
        const updatedItems = {
            ...state.items
        };
        const currentTotalPrice = updatedItems[action.payload].items[0].price;


            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems),
                    }
                },
                totalPrice: oldItems.length > 1 ? state.totalPrice - currentTotalPrice : state.totalPrice,
                totalCount: oldItems.length > 1 ? state.totalCount - 1 : state.totalCount,
            }
        };

        case 'ADD_ONE_ITEM': {
        const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems),
                    }
                },
                totalPrice: state.totalPrice + state.items[action.payload].items[0].price,
                totalCount: state.totalCount + 1,
            }
        };

        default:
            return state;
    };
}

export default cart;