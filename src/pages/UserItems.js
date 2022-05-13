import React from 'react';
import PostList from '../components/PostList';
import '../styles/App.css'
import PostHeader from '../components/PostHeader';
import { useDispatch, useSelector } from "react-redux"
import { initialStateAction } from '../actions/itemsAction';
import { foundPostsAction } from '../actions/foundItemsAction';
import { fetchItems } from '../serivces/items';
import { Watch } from 'react-loader-spinner'

const UserItems = (props) => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.itemsReducer.items)
  const filter = useSelector(state => state.filterReducer.filter)
  const isLoaded = useSelector(state => state.isLoadedReducer.isLoadedItems)

  const initialState = (postsArticle) => {
    const initialPosts = posts.map((posts, index) => (
      (index === 0) ? { ...posts, hidden: false } : { ...posts, hidden: true }
    ))
    dispatch(initialStateAction(initialPosts))
  }

  React.useEffect(() => {
    if (!isLoaded)
      dispatch(fetchItems())
    initialState(posts);
  }, []);

  React.useEffect(() => {
    const foundItems = [...posts].filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
    dispatch(foundPostsAction(foundItems))
  }, [filter, posts]);


  return (

    <div className='App'>
      {(isLoaded)
        ? <>
          <PostHeader initialState={initialState} />
          <PostList title='Новости' admin={props.admin} />
        </>
        : <div className='watch'>
          <Watch className='watch'
            height="250"
            width="250"
            color='black'
            ariaLabel='loading'
          />
        </div>
      }
    </div>
  );
}

export default UserItems;