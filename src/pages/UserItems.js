import React from 'react';
import PostList from '../components/PostList';
import '../styles/App.css'
import PostHeader from '../components/PostHeader';
import { useDispatch, useSelector } from "react-redux"

const UserItems = (props) =>{

  const dispatch = useDispatch();
  const posts = useSelector(state => state.itemsReducer.items)
  const filter = useSelector(state => state.filterReducer.filter)

  const initialState = (postsArticle) => {
    dispatch({
      type: "INITIAL_STATE", payload: posts.map((posts, index) => (
        (index === 0) ? { ...posts, hidden: false } : { ...posts, hidden: true }
      ))
    })
  }

  React.useEffect(() => {
    initialState(posts);
  }, []);

  React.useEffect(() => {
    dispatch({ type: "FOUND_ITEMS", payload: [...posts].filter(post => post.title.toLowerCase().includes(filter.toLowerCase())) })
  }, [dispatch, filter, posts]);


  return (

    <div className='App'>
      <PostHeader initialState={initialState} />
      <PostList title='Новости' admin = {props.admin} />
    </div>
  );
}

export default UserItems;
