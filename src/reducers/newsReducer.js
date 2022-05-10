const defaultStore = {
    news: [
        { id: 1, title: 'Новость 1', body: 'Какая-то новость', file: 'https://avatanplus.com/files/resources/original/5790e2c1d91d61560df5c561.png' },
        { id: 2, title: 'Новость 2', body: 'Какая-то новость 2', file: 'https://avatanplus.com/files/resources/original/5790e2c1d91d61560df5c561.png' },
        { id: 3, title: 'Новость 3', body: 'Какая-то новость 3', file: 'https://avatanplus.com/files/resources/original/5790e2c1d91d61560df5c561.png' },
        { id: 4, title: 'Новость 4', body: 'Какая-то новость 4', file: 'https://avatanplus.com/files/resources/original/5790e2c1d91d61560df5c561.png' },
        { id: 5, title: 'Новость 5', body: 'Какая-то новость 5', file: 'https://avatanplus.com/files/resources/original/5790e2c1d91d61560df5c561.png' },
        { id: 6, title: 'Новость 6', body: 'Какая-то новость 6', file: 'https://avatanplus.com/files/resources/original/5790e2c1d91d61560df5c561.png' },
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