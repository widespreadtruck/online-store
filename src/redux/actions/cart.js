export const addPizzaToCart = (obj) => ({
    type: 'ADD_PIZZA_CART',
    payload: obj
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});

export const deletePizzaItem = (id) => ({
    type: 'DELETE_PIZZA',
    payload: id
})