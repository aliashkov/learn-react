const defaultStore = {
    users: []
}

export const usersReducer = (state = defaultStore, action : any) => {
    switch (action.type) {
        case "CHANGE_USER":
            return { ...state, users: action.payload }
        case "GET_USERS":
            return {...state , users : action.payload}
        default:
            return state
    }
}
