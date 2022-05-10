import React from 'react';
import PostList from './components/PostList';
import './styles/App.css'
import PostAdd from './components/PostAdd';
import PostHeader from './components/PostHeader';
import { useDispatch, useSelector } from "react-redux"

function App() {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.newsReducer.news)
  const filter = useSelector(state => state.filterReducer.filter)

  const initialState = (newsArticle) => {
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
    dispatch({ type: "FOUND_NEWS", payload: [...posts].filter(post => post.title.toLowerCase().includes(filter.toLowerCase())) })
  }, [dispatch, filter, posts]);


  return (

    <div className='App'>
      <PostHeader initialState={initialState} />
      <PostAdd />
      <PostList title='Новости' />
    </div>
  );
}

export default App;


