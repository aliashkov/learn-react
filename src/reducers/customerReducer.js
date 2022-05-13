const defaultStore = {
    cash: 5,
}


export const customerReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "ADD_MONEY":
            return { ...state, cash: state.cash + action.payload }
        case "GET_MONEY":
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}
