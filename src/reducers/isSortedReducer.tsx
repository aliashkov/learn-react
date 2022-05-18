const defaultStore = {
    isSorted: false,
}


export const isSortedReducer = (state = defaultStore, action : any) => {
    switch (action.type) {
        case "INITIAL_SORT":
            return { ...state, isSorted: false }
        case "IS_SORTED":
                return { ...state, isSorted: true }
        default:
            return state
    }
}