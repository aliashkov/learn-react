const defaultStore = {
    customers : [
        { id: 1, title: 'Новость 1', body: 'Какая-то новость' },
        { id: 2, title: 'Новость 2', body: 'Какая-то новость 2' },
        { id: 3, title: 'Новость 3', body: 'Какая-то новость 3' },
        { id: 4, title: 'Новость 4', body: 'Какая-то новость 4' },
        { id: 5, title: 'Новость 5', body: 'Какая-то новость 5' },
        { id: 6, title: 'Новость 6', body: 'Какая-то новость 6' },
    ],
}




export const customerReducer = (state = defaultStore  , action) =>{
    switch (action.type) {
        case "ADD_CUSTOMER":
           return {...state, cash : state.cash + action.payload}
        case "GET_CUSTOMER":
           return {...state, cash : state.cash - action.payload}
        default :
          return state
    }
}
