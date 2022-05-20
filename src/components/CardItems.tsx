import MyButton from './button/MyButton';
import '../styles/App.css'
import { useDispatch, useSelector } from "react-redux"
import MyInput from './input/MyInput';
import { useState } from 'react';
import { addItemToCard, deleteItemToCard } from '../actions/itemsAction';



const CardItems = (props: any) => {
    const [title, setTitle] = useState('1');
    const dispatch = useDispatch();
    const posts: any = useSelector<{ state: any, itemsReducer: any }>(state => state.itemsReducer.items);

    const addItemToBasket = (id: number) => {
        console.log(parseInt(title))
        const amountAdded = parseInt(title)
        if (isNaN(amountAdded)) {
            const addItem = [...posts].map((posts, index) => ((posts.id === id) ? { ...posts, amountPosts: posts.amountPosts + 1 } : { ...posts }));
            dispatch(addItemToCard(addItem))
        }
        else {
            const addItem = [...posts].map((posts, index) => ((posts.id === id) ? { ...posts, amountPosts: posts.amountPosts + amountAdded } : { ...posts }));
            dispatch(addItemToCard(addItem))
        }


    }

    const deleteItem = (id: number) => {
        const deleteItem = [...posts].map((posts, index) => ((posts.id === id) ? { ...posts, amountPosts: 0 } : { ...posts }));
        dispatch(deleteItemToCard(deleteItem))
    }

    return (

        <div className='posts'>
            <div className='item__wrapper'>
                <div className='posts__main'>
                    <div className='posts__content'>
                        <img className='posts__image' width="120px" height="110px" alt="img" src={props.posts.file}></img>
                        <div className='posts__description'>
                            <div className='posts__title' style={{ textAlign: 'center' }}>{props.posts.title}</div>
                            <div className='posts__title' style={{ textAlign: 'center' }}>Количество : {posts[props.posts.id - 1].amountPosts}</div>
                            <div className='posts__title' style={{ textAlign: 'center' }}>{(props.posts.cost)}</div>
                        </div>
                    </div>
                    <div className='form__wrapper'>
                        <div className='buttons_form_wrapper'>
                            <MyButton onClick={() => { addItemToBasket(props.posts.id) }} > Добавить в корзину </MyButton>
                            <MyButton onClick={() => { deleteItem(props.posts.id) }} > Убрать из корзины </MyButton>
                        </div>
                        <MyInput style={{ width: 300 }}
                            value={title}
                            onChange={(e: any) => setTitle(e.target.value)}
                            type="text"
                            placeholder='Количество товаров'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardItems;
