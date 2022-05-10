import React from 'react';
import MyButton from './button/MyButton';
import '../styles/App.css'

const PostNews = (props) => {

    return (
        <div className='news'>
            <div className='news__content'>
                <strong>{props.number}. {props.news.title}</strong>
                <div>
                    {(props.news.hidden) ? '' : (props.news.body)}
                </div>
            </div>
            <div className='news_buttons'>
                {(props.news.hidden) 
                ? <MyButton onClick={() => { props.addVisibleValue(props.news.id, false) }} > Открыть новость </MyButton>
                : <MyButton onClick={() => { props.addVisibleValue(props.news.id, true) }} > Закрыть новость </MyButton> 
                }
            </div>
        </div>
    )
}

export default PostNews;

