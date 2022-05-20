import { loadedDataItemsAction } from "../actions/isLoadedData"
import { getItemsAction } from "../actions/itemsAction"

export const fetchItems = () => {
    return function (dispatch : any) {
        fetch('https://raw.githubusercontent.com/aliashkov/Json-store/main/items.json')
            .then(response => response.json())
            .then(json => {
                const initialPosts = json.map((posts : Object, index : Number) => (
                    (index === 0) ? { ...posts, hidden: false, amountPosts : 0} : { ...posts, hidden: true, amountPosts : 0 }
                ))
                dispatch(getItemsAction(initialPosts))
                dispatch(loadedDataItemsAction())
            })
    }
}