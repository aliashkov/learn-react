const defaultStore = {
    isLoadedItems: false,
    isLoadedUsers: false
}


export const isLoadedReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "DATA_LOADED_ITEMS":
            return { ...state, isLoadedItems: true }
        case "DATA_LOADED_USERS":
                return { ...state, isLoadedUsers: true }
        default:
            return state
    }
}