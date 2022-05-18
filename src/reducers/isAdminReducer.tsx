const defaultStore = {
    isAdmin: false,
}


export const isAdminReducer = (state = defaultStore, action : any) => {
    switch (action.type) {
        case "ROLE_ADMIN":
            return { ...state, isAdmin: true }
        case "ROLE_USER":
            return { ...state, isAdmin: false }
        default:
            return state
    }
}