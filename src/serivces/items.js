import { loadedDataItemsAction } from "../actions/isLoadedData"
import { getItemsAction } from "../actions/itemsAction"

export const fetchItems = () => {
    return function (dispatch) {
        fetch('https://raw.githubusercontent.com/aliashkov/Json-store/main/items.json')
            .then(response => response.json())
            .then(json => {
                const initialPosts = json.map((posts, index) => (
                    (index === 0) ? { ...posts, hidden: false } : { ...posts, hidden: true }
                ))
                dispatch(getItemsAction(initialPosts))
                dispatch(loadedDataItemsAction())
            })
    }
}