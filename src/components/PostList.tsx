import React from 'react';
import PostItems from './PostItems';
import '../styles/App.css'
import { useSelector } from "react-redux"

const PostList = (props : any) => {

    const foundItems : any = useSelector<{ state : any , foundItemsReducer: any }>(state => state.foundItemsReducer.foundItems);
    const isSorted = useSelector<{ state : any , isSortedReducer: any }>(state => state.isSortedReducer.isSorted);

    return (

        <div className='posts__wrapper'>
            <div className='posts__title' style={{ textAlign: 'center' , fontSize : '29px' }}>
                {props.title}
            </div>
            {foundItems.map((posts : any, index : number) =>
                <PostItems number={index + 1}  admin={props.admin} posts={posts} key={posts.id} />)
            }
        </div>
    )
}

export default PostList;
