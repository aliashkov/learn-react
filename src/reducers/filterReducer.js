const defaultStore = {
    filter: '',
}


export const filterReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "CHANGE_FILTER":
            return { ...state, filter: action.payload }
        default:
            return state
    }
}
