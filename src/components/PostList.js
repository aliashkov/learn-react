import React from 'react';
import PostNews from './PostNews';

const PostList = (props) => {
    console.log(props)
    return (
        
        <>
            <h1 style={{ textAlign: 'center' }}>
                {props.title}
            </h1>
            {props.news.map((news, index) =>
                <PostNews addVisibleValue={props.addVisibleValue} number={index + 1} news={news} key={news.id} />)
            }
        </>
    )
}

export default PostList;
