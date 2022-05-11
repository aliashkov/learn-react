import React from 'react';
import PostNews from './PostNews';
import '../styles/App.css'
import { useSelector } from "react-redux"

const PostList = (props) => {
    const foundNews = useSelector(state => state.foundItemsReducer.foundItems)
    const isSorted = useSelector(state => state.isSortedReducer.isSorted)
    console.log(isSorted)

    return (

        <div className='news__wrapper'>
            <div className='news__title' style={{ textAlign: 'center' , fontSize : '29px' }}>
                {props.title}
            </div>
            {foundNews.map((news, index) =>
                <PostNews number={index + 1}  admin={props.admin} news={news} key={news.id} />)
            }
        </div>
    )
}

export default PostList;
