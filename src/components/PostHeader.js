import React from 'react';
import MyInput from './input/MyInput';
import MyButton from './button/MyButton';
import { useDispatch, useSelector } from "react-redux"

const PostHeader = (props) => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filterReducer.filter)
    const posts = useSelector(state => state.itemsReducer.items)
    const isSorted = useSelector(state => state.isSortedReducer.isSorted)


    const sortById = () => {
        dispatch({
            type: "POSTS_SORT", payload: posts.sort((a, b) => {
                if (a.title > b.title) {
                    return -1
                } else if (a.title < b.title) {
                    return 1
                } else {
                    return 0
                }
            })
        })
        dispatch({ type: "IS_SORTED" })
    }

    const sortInitial = () => {
        dispatch({
            type: "POSTS_SORT", payload: posts.sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                } else if (a.title > b.title) {
                    return 1
                } else {
                    return 0
                }
            })
        })
        dispatch({ type: "INITIAL_SORT" })
    }

    const sortReverse = (isSorted) => {
        if (!isSorted)
            sortById()
        else
            sortInitial()
        props.initialState(posts);
    }

    return (
        <div className='header__wrapper'>
            <MyInput
                placeholder='Поиск новости...'
                value={filter}
                onChange={e => dispatch({ type: "CHANGE_FILTER", payload: e.target.value })}
            />
            <MyButton onClick={() => { sortReverse(isSorted) }} > Сортировать </MyButton>
        </div>
    )
}

export default PostHeader;
