import { loadedDataUsersAction } from "../actions/isLoadedData"
import { getUsersAction } from "../actions/usersAction"

export const fetchUsers = () => {
    return function(dispatch : any){
        fetch('https://raw.githubusercontent.com/aliashkov/Json-store/main/users.json')
            .then(response => response.json())
            .then(json => {
                dispatch(loadedDataUsersAction())
                dispatch(getUsersAction(json))
            })
    }
}