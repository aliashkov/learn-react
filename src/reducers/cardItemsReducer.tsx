const defaultStore = {
    itemsCard: []
}

export const cardItemsReducer = (state = defaultStore, action : any) => {
    switch (action.type) {
        case "ADD_ITEM_CARD":
            return { ...state, itemsCard: [...state.itemsCard, action.payload] }
        case "ADD_ITEMS_CARD":
            return { ...state, itemsCard: action.payload }
        case "DELETE_ITEM_CARD":
            return { ...state, itemsCard: action.payload }
        default:
            return state
    }
}