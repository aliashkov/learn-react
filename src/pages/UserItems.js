import React from 'react';
import PostList from '../components/PostList';
import '../styles/App.css'
import PostHeader from '../components/PostHeader';
import { useDispatch, useSelector } from "react-redux"
import { initialStateAction } from '../actions/itemsAction';
import { foundPostsAction } from '../actions/foundItemsAction';

const UserItems = (props) => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.itemsReducer.items)
  const filter = useSelector(state => state.filterReducer.filter)

  const initialState = (postsArticle) => {
    const initialPosts = posts.map((posts, index) => (
      (index === 0) ? { ...posts, hidden: false } : { ...posts, hidden: true }
    ))
    dispatch(initialStateAction(initialPosts))
  }

  React.useEffect(() => {
    initialState(posts);
  }, []);

  React.useEffect(() => {
    const foundItems = [...posts].filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
    dispatch(foundPostsAction(foundItems))
  }, [dispatch, filter, posts]);


  return (

    <div className='App'>
      <PostHeader initialState={initialState} />
      <PostList title='Новости' admin={props.admin} />
    </div>
  );
}

export default UserItems;