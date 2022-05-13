const defaultStore = {
    news: [
        { id: 1, title: 'Новость 1', body: 'Какая-то новость' },
        { id: 2, title: 'Новость 2', body: 'Какая-то новость 2' },
        { id: 3, title: 'Новость 3', body: 'Какая-то новость 3' },
        { id: 4, title: 'Новость 4', body: 'Какая-то новость 4' },
        { id: 5, title: 'Новость 5', body: 'Какая-то новость 5' },
        { id: 6, title: 'Новость 6', body: 'Какая-то новость 6' },
    ],
}


export const newsReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "INITIAL_STATE":
            return { ...state, news: action.payload }
        case "POSTS_SORT":
            return { ...state, news: action.payload }
        case "CHANGE_VISIBILITY":
            return { ...state, news: action.payload }
        case "ADD_POST":
            return { ...state, news: [...state.news, action.payload] }
        default:
            return state
    }
}