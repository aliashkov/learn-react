const defaultStore = {
    isClosed: false,
}


export const isClosedReducer = (state = defaultStore, action : any) => {
    switch (action.type) {
        case "OPEN":
            return { ...state, isClosed: true }
        case "CLOSE":
            return { ...state, isClosed: false }
        default:
            return state
    }
}