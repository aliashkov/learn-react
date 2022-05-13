import React from 'react';
import PostNews from './PostNews';
import { useSelector } from "react-redux"

const PostList = (props) => {
    const foundNews = useSelector(state => state.foundNewsReducer.foundNews)

    return (

        <div className='news__wrapper'>
            <h1 style={{ textAlign: 'center' }}>
                {props.title}
            </h1>
            {foundNews.map((news, index) =>
                <PostNews number={index + 1} news={news} key={news.id} />)
            }
        </div>
    )
}

export default PostList;
