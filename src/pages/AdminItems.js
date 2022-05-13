import React from 'react';
import PostList from '../components/PostList';
import '../styles/App.css'
import PostAdd from '../components/PostAdd';
import { useDispatch, useSelector } from "react-redux"

const AdminItems = (props) => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.itemsReducer.items)
  const filter = useSelector(state => state.filterReducer.filter)
  const isSorted = useSelector(state => state.isSortedReducer.isSorted)

  const initialState = (postsArticle) => {
    if (isSorted) {
      dispatch({
        type: "POSTS_SORT", payload: posts.sort((a, b) => {
          if (a.title < b.title) {
            return -1
          } else if (a.title > b.title) {
            return 1
          } else {
            return 0
          }
        })
      })
      dispatch({ type: "INITIAL_SORT" })
    }
    dispatch({ type: "SEARCH_STRING", payload: '' });
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
      <PostAdd />
      <PostList title='Новости' admin={props.admin} />
    </div>
  );
}

export default AdminItems;
