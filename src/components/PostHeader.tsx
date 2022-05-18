import React from 'react';
import MyInput from './input/MyInput';
import MyButton from './button/MyButton';
import { useDispatch, useSelector } from "react-redux"
import { initialSortAction, isSortedAction } from '../actions/isSortedAction';
import { postsSortAction } from '../actions/itemsAction';

const PostHeader = (props : any) => {
    const dispatch = useDispatch();
    const filter : any = useSelector<{ state : any , filterReducer: any }>(state => state.filterReducer.filter);
    const posts : any = useSelector<{ state : any , itemsReducer: any }>(state => state.itemsReducer.items);
    const isSorted : any = useSelector<{ state : any , isSortedReducer: any }>(state => state.isSortedReducer.isSorted);




    const sortById = () => {
        const sortedPosts = posts.sort((a : any, b : any) => {
            if (a.title > b.title) {
                return -1
            } else if (a.title < b.title) {
                return 1
            } else {
                return 0
            }
        })
        dispatch(postsSortAction(sortedPosts))
        dispatch(isSortedAction())
    }

    const sortInitial = () => {
        const sortedPosts = posts.sort((a : any, b : any) => {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0
            }
        })
        dispatch(postsSortAction(sortedPosts))
        dispatch(initialSortAction())
    }

    const sortReverse = (isSorted : boolean) => {
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
                onChange={(e : any) => dispatch({ type: "CHANGE_FILTER", payload: e.target.value })}
            />
        </div>
    )
}

export default PostHeader;