import React from 'react';
import MyButton from './button/MyButton';
import '../styles/App.css'
import { useDispatch, useSelector } from "react-redux"
import PostAdd from './PostAdd';


const PostNews = (props) => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.itemsReducer.items)
    const addVisibleValue = (id, visible) => {
        dispatch({ type: "CHANGE_VISIBILITY", payload: [...posts].map((news, index) => ((news.id === id) ? { ...news, hidden: visible } : { ...news })) })
    }

    const deleteItem = (id) => {
        console.log([...posts].filter((news) => ((news.id !== id))))
        dispatch({ type: "DELETE_ITEM", payload: [...posts].filter((news) => ((news.id !== id))) })
    }

    return (

        <div className='news'>
            <div className='item__wrapper'>
                <div className='news__main'>
                    <div className='news__content'>
                        <img className='news__image' width="120px" height="110px" alt="img" src={props.news.file}></img>
                        <div className='news__description'>
                            <div className='news__title' style={{ textAlign: 'center' }}>{props.news.title}</div>
                            <div className='news__text'>{(props.news.body)}</div>
                            <div className='news__title' style={{ textAlign: 'center' }}>{(props.news.cost)}</div>
                        </div>
                    </div>

                    {(props.admin) ?
                        <div className='news_buttons'>

                            {(props.news.hidden)
                                ? <MyButton onClick={() => { addVisibleValue(props.news.id, false) }} > Открыть новость </MyButton>
                                : <MyButton onClick={() => { addVisibleValue(props.news.id, true) }} > Закрыть новость </MyButton>
                            }
                            <MyButton onClick={() => { deleteItem(props.news.id) }} > Удалить </MyButton>
                        </div>
                        : ''}
                </div>
                {(!props.news.hidden && props.admin)
                   ? <PostAdd idValue={props.news.id} changed={true}/>
                   : ''}
            </div>
        </div>
    )
}

export default PostNews;


