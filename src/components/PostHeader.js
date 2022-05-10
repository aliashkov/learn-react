import React  from 'react';
import MyInput from './input/MyInput';
import MyButton from './button/MyButton';


const PostHeader = (props) => {
    return (
        <div className='header__wrapper'>

            <MyInput
                placeholder='Поиск новости...'
                value={props.filter}
                onChange={e => props.setFilter(e.target.value)}

            />
            <MyButton onClick={() => { props.initialState() }} > Сбросить состояния </MyButton>
            <MyButton onClick={() => {props.sortReverse(props.isSorted)}} > Сортировать </MyButton>
        </div>
    )
}

export default PostHeader;