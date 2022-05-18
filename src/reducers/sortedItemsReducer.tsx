const defaultStore = {
    sortedItems: [],
    isSortedByAmount : false
}


export const sortedItemsReducer = (state = defaultStore, action : any) => {
    switch (action.type) {
        case "SORTED_ITEMS":
            return { ...state, sortedItems: action.payload }
        case "SORT_BY_AMOUNT":
                return { ...state, isSortedByAmount: true }
        default:
            return state
    }
}