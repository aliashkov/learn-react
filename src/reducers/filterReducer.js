const defaultStore = {
    filter: '',
}


export const filterReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "SEARCH_STRING":
            return { ...state, filter: action.payload }
        default:
            return state
    }
}