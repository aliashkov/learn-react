const defaultStore = {
    isLogined: false,
}


export const isLoginedReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "USER_LOGINED":
            return { ...state, isLogined: true }
        case "USER_UNLOGINED":
            return { ...state, isLogined: false }
        default:
            return state
    }
}