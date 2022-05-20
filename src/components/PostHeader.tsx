import React from 'react';
import MyInput from './input/MyInput';
import { useDispatch, useSelector } from "react-redux"

const PostHeader = (props : any) => {
    const dispatch = useDispatch();
    const filter : any = useSelector<{ state : any , filterReducer: any }>(state => state.filterReducer.filter);


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