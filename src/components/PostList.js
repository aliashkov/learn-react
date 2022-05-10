import React from 'react';
import PostNews from './PostNews';

const PostList = (props) => {
    console.log(props)
    return (
        
        <div className='news__wrapper'>
            <h1 style={{ textAlign: 'center' }}>
                {props.title}
            </h1>
            {props.news.map((news, index) =>
                <PostNews addVisibleValue={props.addVisibleValue} number={index + 1} news={news} key={news.id} />)
            }
        </div>
    )
}

export default PostList;
