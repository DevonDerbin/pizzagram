const setPizzaChoices = (state, choices) => {
    let choicesEntries = Object.entries(choices);
    let newState = {
        ...state,
        pizzaChoices: {
            ...state.pizzaChoices,
            [choicesEntries[0][0]]: choicesEntries[0][1],
        }
    };
    return newState;
}

const setIngredients = (state, data) => {
    let newState = {
        ...state,
        data : data.data
    }
    return newState;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setChoices': return setPizzaChoices(state, action.choices);
        case 'setIngredients': return setIngredients(state, action.data );
        default: return state;
    }
};

export default reducer;
