import React from 'react';
import MyButton from './button/MyButton';
import '../styles/App.css'
import { useDispatch, useSelector } from "react-redux"

const PostNews = (props) => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.newsReducer.news)
    const addVisibleValue = (id, visible) => {
        dispatch({ type: "CHANGE_VISIBILITY", payload: [...posts].map((news, index) => ((news.id === id) ? { ...news, hidden: visible } : { ...news })) })
    }

    return (
        <div className='news'>
            <div className='news__content'>
                <img width="100px" height="100px" alt="img" src={props.news.file}></img>
                <strong>{props.number}. {props.news.title}</strong>
                <div>
                    {(props.news.hidden) ? '' : (props.news.body)}
                </div>
            </div>
            <div className='news_buttons'>
                {(props.news.hidden)
                    ? <MyButton onClick={() => { addVisibleValue(props.news.id, false) }} > Открыть новость </MyButton>
                    : <MyButton onClick={() => { addVisibleValue(props.news.id, true) }} > Закрыть новость </MyButton>
                }
            </div>
        </div>
    )
}

export default PostNews;


