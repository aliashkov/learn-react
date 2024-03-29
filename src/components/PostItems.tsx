import React from 'react';
import MyButton from './button/MyButton';
import '../styles/App.css'
import { useDispatch, useSelector } from "react-redux"
import PostAdd from './PostAdd';
import { changeVisibiltyAction, deleteItemAction } from '../actions/itemsAction';
import { addItemToCard } from '../actions/itemsAction';


const PostItems = (props: any) => {
    let buttonTitle = '';
    const dispatch = useDispatch();
    const posts: any = useSelector<{ state: any, itemsReducer: any }>(state => state.itemsReducer.items);

    const addVisibleValue = (id: number, visible: boolean) => {
        const addVisiblePosts = [...posts].map((posts, index) => ((posts.id === id) ? { ...posts, hidden: visible } : { ...posts }));
        dispatch(changeVisibiltyAction(addVisiblePosts))
    }

    const deleteItem = (id: number) => {
        const postsWithDeletedId = [...posts].filter((posts) => ((posts.id !== id)));
        dispatch(deleteItemAction(postsWithDeletedId))
    }

    const addItemToBasket = (id: number) => {
        const addItem = [...posts].map((posts, index) => ((posts.id === id) ? { ...posts, amountPosts: 1 } : { ...posts }));
        dispatch(addItemToCard(addItem))
    }
    [...posts].map((posts, index) => ((posts.id === props.id) ? { ...posts, amountPosts: 1 } : { ...posts }));

    if ( posts.includes(posts[props.number - 1])){
        if (posts[props.number - 1].amountPosts > 0){
            buttonTitle = 'Добавлено'
        } else {
            buttonTitle = 'Добавить в корзину'
        }
    
    }


    return (

        <div className='posts'>
            <div className='item__wrapper'>
                <div className='posts__main'>
                    <div className='posts__content'>
                        <img className='posts__image' width="120px" height="110px" alt="img" src={props.posts.file}></img>
                        <div className='posts__description'>
                            <div className='posts__title' style={{ textAlign: 'center' }}>{props.posts.title}</div>
                            <div className='posts__text'>{(props.posts.body)}</div>
                            <div className='posts__title' style={{ textAlign: 'center' }}>{(props.posts.cost)}</div>
                        </div>
                    </div>

                    {(props.admin) ?
                        <div className='posts_buttons'>

                            {(props.posts.hidden)
                                ? <MyButton onClick={() => { addVisibleValue(props.posts.id, false) }} > Открыть новость </MyButton>
                                : <MyButton onClick={() => { addVisibleValue(props.posts.id, true) }} > Закрыть новость </MyButton>
                            }
                            <MyButton onClick={() => { deleteItem(props.posts.id) }} > Удалить </MyButton>
                        </div>
                        : <div className='button_form_wrapper'>
                            <MyButton onClick={() => { addItemToBasket(props.posts.id) }} >{buttonTitle} </MyButton>

                        </div>}
                </div>
                {(!props.posts.hidden && props.admin)
                    ? <PostAdd idValue={props.posts.id} changed={true} />
                    : ''}
            </div>
        </div>
    )
}

export default React.memo(PostItems, (prevState, nextState) => {
    if (prevState.posts.hidden !== nextState.posts.hidden)
        return false;
    return true;
});


