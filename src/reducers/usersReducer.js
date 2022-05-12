const defaultStore = {
    users: [
        { id: 1, name: 'Артем', surname: 'Ляшков', year : '1997', passwordNumber : 'MP2527318', file: 'https://i.imgur.com/VWsfxwd.jpg' },
    ],
}

export const usersReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "CHANGE_USER":
            return { ...state, users: action.payload }
        case "GET_USERS":
            return {...state , users : [...state.users, ...state.payload]}
        default:
            return state
    }
}

