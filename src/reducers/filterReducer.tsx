const defaultStore = {
    filter: '',
}


export const filterReducer = (state = defaultStore, action : any) => {
    switch (action.type) {
        case "CHANGE_FILTER":
            return { ...state, filter: action.payload }
        default:
            return state
    }
}