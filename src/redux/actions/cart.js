export const addPizzaToCart = (obj) => ({
    type: 'ADD_PIZZA_CART',
    payload: obj
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
});

export const removeOneItem = (id) => ({
    type: 'REMOVE_ONE_ITEM',
    payload: id
});
export const addOneItem = (id) => ({
    type: 'ADD_ONE_ITEM',
    payload: id
});