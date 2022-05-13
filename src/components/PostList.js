import React from 'react';
import PostItems from './PostItems';
import '../styles/App.css'
import { useSelector } from "react-redux"

const PostList = (props) => {
    const foundItems = useSelector(state => state.foundItemsReducer.foundItems)
    const isSorted = useSelector(state => state.isSortedReducer.isSorted)
    console.log(isSorted)

    return (

        <div className='posts__wrapper'>
            <div className='posts__title' style={{ textAlign: 'center' , fontSize : '29px' }}>
                {props.title}
            </div>
            {foundItems.map((posts, index) =>
                <PostItems number={index + 1}  admin={props.admin} posts={posts} key={posts.id} />)
            }
        </div>
    )
}

export default PostList;

