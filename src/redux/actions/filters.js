//action creators
export const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name,
});

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
});

// export const setMiniCategory = (category) => ({
//     type: 'SET_MINI_CATEGORY',
//     payload: category,
// });