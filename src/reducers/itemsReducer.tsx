const defaultStore = {
    items: [
    ]
}


export const itemsReducer = (state = defaultStore, action : any) => {
    switch (action.type) {
        case "INITIAL_STATE":
            return { ...state, items: action.payload }
        case "POSTS_SORT":
            return { ...state, items: action.payload }
        case "CHANGE_VISIBILITY":
            return { ...state, items: action.payload }
        case "ADD_POST":
            return { ...state, items: [...state.items, action.payload] }
        case "DELETE_ITEM":
            return { ...state, items: action.payload }
        case "CHANGE_POST":
            return { ...state, items: action.payload }
        case "GET_ALL_POSTS":
            return {...state , items : action.payload}
        default:
            return state
    }
}