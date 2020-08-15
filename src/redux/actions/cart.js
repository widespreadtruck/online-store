export const addPizzaToCart = (obj) => ({
    type: 'ADD_PIZZA_CART',
    payload: obj
});

export const clearCart = (obj) => ({
    type: 'CLEAR_CART',
})